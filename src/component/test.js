// Part 1
function fetchData(url, callback) {
    console.log("Fetching data from " + url);
    setTimeout(()=>{
        callback(url);
    },2000);
}

const printData = (props) => {
    console.log("Data from" + props);
}

fetchData("jiangren.com",printData)


// Part 2
function fetchDataPromise(url){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Fetching data from " + url);
            resolve(url);
        },2000);
    })
}

fetchDataPromise("jiangren.com")
.then((result)=>{
    console.log("Data from" + result);
})


// Part 3
async function fetDataAsync(url){
    try{
        const result = await fetchDataPromise(url);
        return result;
    } catch(error){
        console.log('Error processing numbers:',error);
    }
}

fetDataAsync("jiangren.com")
.then(result =>{
    console.log("Data from" + result);
})