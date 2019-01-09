import delay from "redux-saga";

it(`async test1`, done => {
    setTimeout(done, 1000);
});

it(`async test 2`, ()=> {
    return new Promise(
        resolve => setTimeout(resolve, 1000)
    )
});

it(`async test 3`, async () => await delay(1000));
