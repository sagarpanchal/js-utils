export const useBoolean = (initialValue = false) => {
  const [state, _setState] = React.useState(Boolean(initialValue));

  const setState = React.useMemo(() => {
    return {
      true: () => _setState(true),
      false: () => _setState(false),
      toggle: () => _setState((v) => !v),
    };
  }, []);

  React.useDebugValue(state);
  return [state, setState];
};

export const useCompositeState = (initialState = {}) => {
  const [state, _setState] = React.useState(initialState);
  const initialStateRef = React.useRef(initialState);

  const setState = React.useCallback((objectOrCallback, spread = true) => {
    const callback = isFunction(objectOrCallback) ? objectOrCallback : undefined;
    const object = isObject(objectOrCallback) ? objectOrCallback : {};

    _setState((state) => {
      const _object = callback ? callback(state) : object;
      return spread ? { ...state, ..._object } : { ..._object };
    });
  }, []);

  const resetState = React.useCallback(() => {
    _setState(initialStateRef.current);
  }, []);

  React.useDebugValue(state);
  return [state, setState, resetState];
};

export const useCounter = (init = 0) => {
  const [count, set] = React.useState(init);

  const inc = React.useCallback((cb = () => {}) => set((n) => ((n = n > 0 ? ++n : 1), cb(n), n)), []);
  const dec = React.useCallback((cb = () => {}) => set((n) => ((n = n > 0 ? --n : 0), cb(n), n)), []);

  React.useDebugValue(count);
  return [count, inc, dec];
};

export const useIsMobile = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  const setSize = () => setWidth(window.innerWidth);

  React.useEffect(() => {
    setSize();
    window.addEventListener("resize", setSize);
    return () => window.removeEventListener("resize", setSize);
  }, []);

  const output = React.useMemo(() => {
    const isMobile = width <= MOBILE_MAX_WIDTH;
    const isTablet = width <= TABLET_MAX_WIDTH;
    return [isMobile, isTablet];
  }, [width]);

  React.useDebugValue(output);
  return output;
};

// export const useQueryParams = () => {
//   const location = useLocation();
//   const output = React.useMemo(() => queryStringToObject(location.search), [location.search]);
//   React.useDebugValue(output);
//   return output;
// };

// export const usePathname = () => {
//   const match = useRouteMatch();
//   const pathname = React.useMemo(() => generateRoutePath(match.path)?.split("/")?.pop(), [match.path]);
//   React.useDebugValue(pathname);
//   return pathname;
// };
