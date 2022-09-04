function mergeSort(list) {
    if(list.length > 1){
        const mid = Math.floor(list.length/2)
        const left = list.slice(0,mid)
        const right = list.slice(mid)
        mergeSort(left)
        mergeSort(right)
        let i=0,j=0,k=0
        while (i<left.length && j<right.length) {
            if (left[i]<right[j]){
                list[k] = left[i]
                i++
            }
            else{
                list[k] = right[j]
                j++
            }
            k++
        }
        while (i<left.length) {
            list[k] = left[i]
            i++
            k++            
        }
        while (j<left.length) {
            list[k] = right[j]
            j++
            k++            
        }
    }    
}

items = [54, 26, 93, 17, 77, 31, 44, 55, 20]
mergeSort(items)
console.log(items)