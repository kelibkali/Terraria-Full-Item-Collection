import {ElMessage} from "element-plus";

const copyStr  = (str: string) => {
    const textarea = document.createElement("textarea")
    textarea.value = str
    textarea.style.position = "fixed"
    textarea.style.opacity = "0"
    document.body.appendChild(textarea)
    textarea.focus()
    textarea.select()
    document.execCommand("copy")
    ElMessage.success("复制成功")
    document.body.removeChild(textarea)
}

export {copyStr}