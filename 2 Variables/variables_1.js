function testScope() {
    var xVar = 10;
    let xLet = 20;
    const xConst = 30;

    console.log("Inside the function:");
    console.log("var xVar:", xVar); // Видна
    console.log("let xLet:", xLet); // Видна
    console.log("const xConst:", xConst); // Видна

    {
        var innerVar = 40;
        let innerLet = 50;
        const innerConst = 60;

        console.log("Inside the block:");
        console.log("var innerVar:", innerVar); // Видна
        console.log("let innerLet:", innerLet); // Видна
        console.log("const innerConst:", innerConst); // Видна
    }

    // Попытка обращения к переменным внутри блока извне
    console.log("Trying to access block-scoped variables outside the block:");
    console.log("innerVar:", innerVar); // Видна (для var)
    //console.log("innerLet:", innerLet); // Не видна (для let)
    //console.log("innerConst:", innerConst); // Не видна (для const)
}

testScope();

// Попытка обращения к переменным извне функции
//console.log("Outside the function:");
//console.log("var xVar:", xVar); // Не видна (для var)
//console.log("let xLet:", xLet); // Не видна (для let)
//console.log("const xConst:", xConst); // Не видна (для const)
