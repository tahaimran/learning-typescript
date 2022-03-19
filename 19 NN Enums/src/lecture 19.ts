enum resType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON};

interface Resource <T>{
        uid: number;
        resName: resType;
        data: T;
}

const docTh : Resource<string>= {
    uid: 1,
    resName: resType.BOOK,
    data: "When"
}
console.log(docTh)