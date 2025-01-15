/***
 * @file 防抖 
 */

const debounce = (fn, delay) => {
    timer = null
    return () => {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn();
            timer = null
        }, delay);
    }
}

/**
 * newValue()
 * 
*/
function Component() {
    const [value, setValue] = useState(0)
    const newValue = useDebounce(value, 500)
    return <div onClick={
        () => {
            setValue(value++)
        }
    }>
        {newValue}
    </div>
}



let timer = null
let obj = {
    key: ''
}
function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value)

    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
        obj.key = value
        timer = null
    }, delay)

    return obj.key
}