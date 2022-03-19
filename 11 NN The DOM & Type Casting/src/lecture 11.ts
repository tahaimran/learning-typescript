const anchor = document.querySelector('a')!;
// console.log(anchor.href)


let form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form)

let type = document.querySelector('#type') as HTMLSelectElement;
// console.log(type)

let tofrom = document.querySelector('#tofrom') as HTMLInputElement;
let details = document.querySelector('#details') as HTMLInputElement;
let amount = document.querySelector('#amount') as HTMLInputElement;



form.addEventListener('submit' , (e: Event) => {
    e.preventDefault();
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber,
    );
})

