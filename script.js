const nadpis = document.querySelector("#nadpis");
const tim = document.querySelector(".tim");
const clin = document.querySelector(".clin");
const trum = document.querySelector(".skchow");
const form = document.querySelector("form");

const lang = {
    q: "й",
    w: "ц",
    e: "у",
    r: "к",
    t: "е",
    y: "н",
    u: "г",
    i: "ш",
    o: "щ",
    p: "з",
    "[": "х",
    "]": "ъ",
    a: "ф",
    s: "ы",
    d: "в",
    f: "а",
    g: "п",
    h: "р",
    j: "о",
    k: "л",
    l: "д",
    ";": "ж",
    "'": "э",
    z: "я",
    x: "ч",
    c: "с",
    v: "м",
    b: "и",
    n: "т",
    m: "ь",
    ",": "б",
    ".": "ю",
    "/": ".",
    "`": "ё",
    " ": " ",
    Q: "Й",
    W: "Ц",
    E: "У",
    R: "К",
    T: "Е",
    Y: "Н",
    U: "Г",
    I: "Ш",
    O: "Щ",
    P: "З",
    "{": "Х",
    "}": "Ъ",
    A: "Ф",
    S: "Ы",
    D: "В",
    F: "А",
    G: "П",
    H: "Р",
    J: "О",
    K: "Л",
    L: "Д",
    ":": "Ж",
    '"': "Э",
    Z: "Я",
    X: "Ч",
    C: "С",
    V: "М",
    B: "И",
    N: "Т",
    M: "Ь",
    "<": "Б",
    ">": "Ю",
    "?": ",",
    "~": "Ё"
};

let dit = "cbv rfhnf";

tim.addEventListener('click', () => {
    let val = String(nadpis.value);
    let bum = "";
    for (let x = 0; x < val.length; x++) {
        const cum = val[x]
        if (lang.hasOwnProperty(cum)) {
            bum += lang[cum]
        }
        else {
            bum += val[x]
        }
    }
    console.log(val)
    console.log(bum)
    trum.textContent = bum
});

clin.addEventListener('click', (x) => {
    x.preventDefault(); // Чтобы не перезагружалось
    form.reset();
});