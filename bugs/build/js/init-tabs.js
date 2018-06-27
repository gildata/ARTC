"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright gildata
 *
 * @description initTabs
 * @augments
 * @example
 *
 */

const initTabs = () => {
    let lis = document.querySelectorAll(`[data-nav-li="nav-li"]`),
        divs = document.querySelectorAll(`[data-nav-box="nav-box"]`);
    for (let i = 0; i < (lis.length - 1); i++) {
        lis[i].addEventListener(`click`, (e) => {
            let arr = [0, 1];
            if (lis[i].classList.contains("h5-dnd-nav-li-active")) {
                //
            }else{
                lis[i].classList.add("h5-dnd-nav-li-active");
                lis[i].classList.remove("h5-dnd-nav-li-hidden");
                lis[i].classList.remove("add-bottom-margin");
                lis[i].classList.add("no-bottom-margin");
                // let arr = [0, 1, 2];
                arr.forEach(
                    (item, index) =>{
                        if(index !== i){
                            if (lis[item].classList.contains(`h5-dnd-nav-li-active`)) {
                                lis[item].classList.remove("no-bottom-margin");
                                lis[item].classList.add("add-bottom-margin");
                                lis[item].classList.remove("h5-dnd-nav-li-active");
                                lis[item].classList.add("h5-dnd-nav-li-hidden");
                            }
                        }
                    }
                );
            }
            if (divs[i].classList.contains(`h5-dnd-nav-box-active`)) {
                //
            }else{
                divs[i].classList.add("h5-dnd-nav-box-active");
                divs[i].classList.remove("h5-dnd-nav-box-hidden");
                arr.forEach(
                    (item, index) =>{
                        if(index !== i){
                            if (divs[item].classList.contains(`h5-dnd-nav-box-active`)) {
                                divs[item].classList.remove("h5-dnd-nav-box-active");
                                divs[item].classList.add("h5-dnd-nav-box-hidden");
                            }
                        }
                    }
                );
            }
        });
    }
};

(() => {
    initTabs();
})();
