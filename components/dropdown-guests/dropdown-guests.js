const plus1 = document.querySelector('.dropdown-guests__adults--controls-span2');
const plus2 = document.querySelector('.dropdown-guests__kids--controls-span2');
const plus3 = document.querySelector('.dropdown-guests__babes--controls-span2');

const minus1 = document.querySelector('.dropdown-guests__adults--controls-span1')
const minus2 = document.querySelector('.dropdown-guests__kids--controls-span1')
const minus3 = document.querySelector('.dropdown-guests__babes--controls-span1')


let adultNum = 0;
let kidsNum = 0;
let babesNum = 0;
let dropdownResult = adultNum + kidsNum + babesNum;

const adultNumHTML = document.getElementById('adultNum');
const kidsNumHTML = document.getElementById('kidsNum')
const babesNumHTML = document.getElementById('babesNum')

let dropdownResultHTML = document.getElementById('guests')

adultNumHTML.innerHTML = adultNum;
kidsNumHTML.innerHTML = kidsNum;
babesNumHTML.innerHTML = babesNum;
dropdownResultHTML.value = '';

const clearButton = document.querySelector('.dropdown-guests__clear');
const applyButton = document.querySelector('.dropdown-guests__apply');



clearButton.onclick = () => {
  [adultNum, kidsNum, babesNum] = [0, 0, 0];
  adultNumHTML.innerHTML = adultNum;
  kidsNumHTML.innerHTML = kidsNum;
  babesNumHTML.innerHTML = babesNum;
  count.adultCnt = adultNum;
  count.kidsCnt = kidsNum;
  count.babesCnt = babesNum;
  dropdownResultHTML.value = '';
  clearButton.classList.remove('dropdown-guests__clear--visible')
  minus1.classList.remove('controls-span-active')
  minus2.classList.remove('controls-span-active')
  minus3.classList.remove('controls-span-active')
}

applyButton.onclick = () => {
  document.querySelector('.index__guests-dropdown').classList.remove('dropdown-visible');
}


class Counter {
  constructor(adultNum, kidsNum, babesNum) {
    this.adultCnt = adultNum;
    this.kidsCnt = kidsNum;
    this.babesCnt = babesNum;
  }

  plusButton(name, minusElement, HTMLCnt) {
    if (this.adultCnt == 0 && this.kidsCnt == 0 && this.babesCnt == 0) {
      clearButton.classList.add('dropdown-guests__clear--visible')
    }
    if (this[name] == 0) {
      minusElement.classList.add('controls-span-active')
      }
    this[name] += 1;
    HTMLCnt.innerHTML = this[name];
  };

  minusButton(name, plusElement, HTMLCnt) {
    if (this[name] > 0) {
      this[name] -= 1;
      HTMLCnt.innerHTML = this[name];
    }
    if (this[name] == 0) {
      plusElement.classList.remove('controls-span-active')
    }
    if (this.adultCnt == 0 && this.kidsCnt == 0 && this.babesCnt == 0) {
      clearButton.classList.remove('dropdown-guests__clear--visible')
    }
  };

  howManyGuests () {
    let result = this.adultCnt + this.kidsCnt + this.babesCnt
    if (result == 1) {
      dropdownResultHTML.value = '1 гость'
    } else if (result == 2 || result == 3 || result == 4) {
      dropdownResultHTML.value = `${result} готся`
    } else if (result > 4) {
      dropdownResultHTML.value = `${result} гостей`
    } else {
      dropdownResultHTML.value = '';
    }
  }
}

let count = new Counter(0, 0, 0);



plus1.onclick = () => {
  count.plusButton("adultCnt", minus1, adultNumHTML)
  count.howManyGuests ()
}

plus2.onclick = () => {
  count.plusButton("kidsCnt", minus2, kidsNumHTML)
  count.howManyGuests ()
}

plus3.onclick = () => {
  count.plusButton("babesCnt", minus3, babesNumHTML)
  count.howManyGuests ()
}

minus1.onclick = () => {
  count.minusButton("adultCnt", minus1, adultNumHTML)
  count.howManyGuests ()
}

minus2.onclick = () => {
  count.minusButton("kidsCnt", minus2, kidsNumHTML)
  count.howManyGuests ()
}

minus3.onclick = () => {
  count.minusButton("babesCnt", minus3, babesNumHTML)
  count.howManyGuests ()
}




////////////////////////////////////////////////////////////////////////////////
// plus1.onclick = () => {
//   if (adultNum == 0 && kidsNum == 0 && babesNum == 0) {
//     clearButton.classList.add('dropdown-guests__clear--visible')
//   }
//   if (adultNum == 0) {
//     minus1.classList.add('controls-span-active')
//     }
//   adultNum += 1;
//   adultNumHTML.innerHTML = adultNum;
//   howManyGuests ();
// }

// minus1.onclick = () => {
//   if (adultNum > 0) {
//     adultNum -= 1;
//     adultNumHTML.innerHTML = adultNum;
//   }
//   if (adultNum == 0) {
//     minus1.classList.remove('controls-span-active')
//   }
//   if (adultNum == 0 && kidsNum == 0 && babesNum == 0) {
//     clearButton.classList.remove('dropdown-guests__clear--visible')
//   }
//   howManyGuests ();
// }

// //////////////////////////////////////////////////////////////////////////
// plus2.onclick = () => {
//   if (adultNum == 0 && kidsNum == 0 && babesNum == 0) {
//     clearButton.classList.add('dropdown-guests__clear--visible')
//   }
//   if (kidsNum == 0) {
//     minus2.classList.add('controls-span-active')
//     }
//   kidsNum += 1;
//   kidsNumHTML.innerHTML = kidsNum;
//   howManyGuests ();
// }

// minus2.onclick = () => {
//   if (kidsNum > 0) {
//     kidsNum -= 1;
//     kidsNumHTML.innerHTML = kidsNum;
//   }
//   if (kidsNum == 0) {
//     minus2.classList.remove('controls-span-active')
//   }
//   if (adultNum == 0 && kidsNum == 0 && babesNum == 0) {
//     clearButton.classList.remove('dropdown-guests__clear--visible')
//   }
//   howManyGuests ();
// }

// /////////////////////////////////////////////////////////////////////////////////////////////
// plus3.onclick = () => {
//   if (adultNum == 0 && kidsNum == 0 && babesNum == 0) {
//     clearButton.classList.add('dropdown-guests__clear--visible')
//   }
//   if (babesNum == 0) {
//     minus3.classList.add('controls-span-active')
//     }
//   babesNum += 1;
//   babesNumHTML.innerHTML = babesNum;
//   howManyGuests ();
// }

// minus3.onclick = () => {
//   if (babesNum > 0) {
//     babesNum -= 1;
//     babesNumHTML.innerHTML = babesNum;
//   }
//   if (babesNum == 0) {
//     minus3.classList.remove('controls-span-active')
//   }
//   if (adultNum == 0 && kidsNum == 0 && babesNum == 0) {
//     clearButton.classList.remove('dropdown-guests__clear--visible')
//   }
//   howManyGuests ();
// }

// function howManyGuests () {
//   let result = adultNum + kidsNum + babesNum
//   if (result == 1) {
//     dropdownResultHTML.value = '1 гость'
//   } else if (result == 2 || result == 3 || result == 4) {
//     dropdownResultHTML.value = `${result} готся`
//   } else if (result > 4) {
//     dropdownResultHTML.value = `${result} гостей`
//   } else {
//     dropdownResultHTML.value = '';
//   }
// }