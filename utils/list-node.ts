/* 创建ListNode */
export function ListNode<T>(val: T): ListNode<T> {
    return {
        val,
        next: null
    }
}

/* 创建链表 */
export function create_list_by_vals<T>(...args: T[]): ListNode<T> {
    let list: ListNode<T> | null = null
    let first_node: ListNode<T> | null = null
    for (let i = 0; i < args.length; i++) {
        let node = ListNode(args[i])
        if (!list) {
            list = node
            first_node = node
        } else {
            list.next = node
            list = list.next
        }
    }
    return first_node as ListNode<T>
}

/* 链表转换为数组 */
export function list_to_array<T>(list: ListNode<T>): T[] {
    let arr: T[] = []
    let list_nodes: ListNode<T> | null = list
    while (list_nodes) {
        arr.push(list_nodes.val)
        list_nodes = list_nodes.next
    }

    return arr
}