function wordsCnt()
{
    const inputValue = document.getElementById("inputVal").value
    const result = document.getElementById("result")

    const valToArr= inputValue.split(" ")
    console.log(valToArr)
    const cnt = valToArr.length
    console.log(cnt)

    result.innerHTML= `Number Of words ${cnt}`
}