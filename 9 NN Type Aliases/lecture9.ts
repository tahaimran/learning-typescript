// Adding many types to the same variable

type strOrnum = string | number;

let data:strOrnum = 5;

// Instead Of Object
type objs = {name: string, age: strOrnum};

