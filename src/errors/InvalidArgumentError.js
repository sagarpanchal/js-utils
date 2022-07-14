export class InvalidArgumentError extends Error {
  constructor({ arg, pos = "0", name = "argument", types = ["valid"] }) {
    super(
      `\`${name}\` must be of type(s) - (${types
        ?.map?.((type) => (type?.constructor?.name === "String" ? type : type?.name))
        ?.join?.(", ")}); \`${typeof arg}\` passed at position - ${pos}.`
    );
    this.name = "Invalid Argument";
    this.code = "INVALID_ARGUMENT";
  }
}
