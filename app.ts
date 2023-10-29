// Є функція, яка повертає Promise, він повертає масив рядків і чисел, опишіть правильно тип.

// function getPromise () {
//   return new Promise((resolve) => {
//     resolve(['Text', 50]);
//   });
// }

// getPromise ()
// .then((data) => {
//   console.log(data);
// });

// Or function getPromise (): Promise<Array<string | number>> {
function getPromise (): Promise<(string | number)[]> {
  return new Promise((resolve) => {
    resolve(['Text', 50]);
  });
}

getPromise ()
.then((data) => {
  console.log(data);
});

//-----------------------------------------

// У вас є наступний тип даних

// type AllType = {
//   name: string;
//   position: number;
//   color: string;
//   weight: number
// }

// Є функція, вона приймає два аргументи, в один потрапляє name і color, в іншу частину - position і weight. Потрібно явно вказати, що ці поля з AllType. І сама функція повертає AllType. Скористайтеся Pick.

// function compare (top, bottom): AllType {
//   return {
//     name: top.name,
//     color: top.color,
//     position: bottom.position,
//     weight: bottom.weight,
//   }
// }

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

function compare (top: Pick<AllType, "name" | "color">, bottom: Pick<AllType, "position"| "weight">): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}

//-----------------------------------

// Вкажіть дженерики для функції об'єднання об'єктів.

// function merge (objA, objB) {
//   return Object.assign(objA, objB);
// }


function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const merged = merge({name: 'Alisa'}, {age: 28});

merged.name;

//-----------------------------------

// У вас є наступні класи

// class Component {
//   constructor (public props:T) {

//   }
// }

// class Page extends Component {
//   pageInfo () {
//     console.log(this.props.title);
//   }
// }

// Тільки додаючи дженерики для класів та інтерфейс, приберіть помилку.
interface Iprops {
  title: string;
}

class Component<T> {
  constructor (public props:T) {

  }
}

class Page extends Component<Iprops> {
  pageInfo ():void  {
    console.log(this.props.title);
  }
}