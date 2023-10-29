// Є функція, яка повертає Promise, він повертає масив рядків і чисел, опишіть правильно тип.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
function getPromise() {
    return new Promise(function (resolve) {
        resolve(['Text', 50]);
    });
}
getPromise()
    .then(function (data) {
    console.log(data);
});
function compare(top, bottom) {
    return {
        name: top.name,
        color: top.color,
        position: bottom.position,
        weight: bottom.weight,
    };
}
//-----------------------------------
// Вкажіть дженерики для функції об'єднання об'єктів.
// function merge (objA, objB) {
//   return Object.assign(objA, objB);
// }
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var merged = merge({ name: 'Alisa' }, { age: 28 });
merged.name;
var Component = /** @class */ (function () {
    function Component(props) {
        this.props = props;
    }
    return Component;
}());
var Page = /** @class */ (function (_super) {
    __extends(Page, _super);
    function Page() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Page.prototype.pageInfo = function () {
        console.log(this.props.title);
    };
    return Page;
}(Component));
