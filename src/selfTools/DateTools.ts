function DateFormat(date = new Date(), type = 0, joinStr = ":") {
  let fullDate;
  let year = date.getFullYear();
  let month =
    date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1;
  let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  let noZeroHours = date.getHours();
  let minutes =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  let seconds =
    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  if (type == 0) {
    fullDate = `${year}-${month}-${day} ${hours}${joinStr}${minutes}${joinStr}${seconds}`;
  } else if (type == 1) {
    fullDate = `${year}-${month}-${day} ${hours}${joinStr}${minutes}`;
  } else if (type == 2) {
    fullDate = `${year}-${month}-${day}`;
  } else if (type == 3) {
    fullDate = `${hours}${joinStr}${minutes}${joinStr}${seconds}`;
  } else if (type == 4) {
    fullDate = `${year}${month}${day}${hours}`;
  } else if (type == 5) {
    fullDate = `${year}年${month}月${day}日${hours}时`;
  } else if (type == 6) {
    fullDate = `${noZeroHours}`;
  }
  return fullDate;
}

function string2Date(str:string) {
  let year:number = parseInt(str.substring(0, 4) )
  let month = parseInt(str.substring(4,6) ) - 1
  let day = parseInt(str.substring(6,8) )
  let hour = parseInt(str.substring(8, 10) )
  return new Date(year, month, day, hour)
}

function SpecifTime(number:number) {
  return new Date(new Date().getTime() - number * 60 * 60 * 1000);
}
function intervalDateDay(dayOne:Date,dayTwo:Date){
  return Math.floor((dayOne.getTime() - dayTwo.getTime()) / (24 * 60 * 60 * 1000))
}
//c：对象数组排序的键，
//d：排序方式，"positive"正序，"inverted"倒序。
function timeSort(c: string, d: string) {
  return function (a: any, b: any) {
    const value1 = new Date(a[c]).valueOf();
    const value2 = new Date(b[c]).valueOf();
    if (d === "positive") {
      return value1 - value2;
    } else if (d === "inverted") {
      return value2 - value1;
    }
  };
}

/* ajax轮询封装 */
function turnQuery(methods:any) {
  var startTime = new Date().getTime(); //现在的时间
  var interval = setInterval(() => {
    if (new Date().getTime() - startTime > 5 * 60 * 60 * 1000) {
      //现在的时间减去刷新开始的时间大于 5小时
      // clearInterval(interval); //就删除这个 setInterval 轮询
      // location.reload(true); //就刷新这个页面
      location.reload()
      return;
    }
    methods();
    console.log("轮询");
  }, 5 * 60 * 1000);
}

export { DateFormat, string2Date, SpecifTime, turnQuery, timeSort,intervalDateDay };
