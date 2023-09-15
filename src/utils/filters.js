
export function searchFilter(value, cardlist, checkbox) {
    if (!value && !checkbox) {
        return cardlist;
    }
    else if(value && !checkbox){
        return cardlist.filter(({ nameRU, nameEN }) => nameRU.toLowerCase().includes(value.toLowerCase()) || nameEN.toLowerCase().includes(value.toLowerCase()))
    }
    else if(!value && checkbox){
        return cardlist.filter(({ duration }) => duration <= 40);
    }
    else{
        return cardlist.filter(({ duration }) => duration <= 40).filter(({ nameRU, nameEN }) => nameRU.toLowerCase().includes(value.toLowerCase()) || nameEN.toLowerCase().includes(value.toLowerCase()))
    }
}