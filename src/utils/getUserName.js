import memoize from "lodash/memoize";
import { isEmpty } from "./isEmpty";
import { isNotEmpty } from "./isNotEmpty";
import { hasKey } from "./hasKey";
import { titleCase } from "./index";

export const getUserName = memoize(
  (input, replace = "-") => {
    if (hasKey(input, "user")) input = input?.user;
    const name = [input?.firstName, input?.lastName].filter(isNotEmpty);
    return titleCase(!isEmpty(name) ? name.join(" ") : input?.name ?? input?.username ?? replace);
  },
  (user, replace) => `${user?.firstName}${user?.lastName}${user?.name}${user?.username}${replace}`
);
