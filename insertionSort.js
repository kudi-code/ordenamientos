function insertionShell(list, gap){
    let sublist = 0
    while(sublist<gap){
        for (let i = sublist; i < list.length; i= i+gap) {
            pos = i
            while(pos > 0 && list[pos] < list[pos-gap]){
                let prev= list[pos-gap]
                let current = list[pos]            
                list[pos]=prev,list[pos-gap]= current;
                pos = pos - gap
                prev = 0
                current = 0
            }
        }
        sublist++
    }
    // insertionShell(list, 1)
    return list
}

items2 = [54, 26, 93, 17, 77, 31, 44, 55, 20]
insertionShell(items2, 3) //Gap de 3
insertionShell(items2, 1) //Gap de 1
console.log(items2);