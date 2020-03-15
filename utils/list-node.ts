/* 创建ListNode */
export function ListNode<T>(val: T): ListNode<T> {
    return {
        val,
        next: null
    }
}

/* 双向链表的节点 */
export function DoubleLinkedListNode<T>(val: T): DoubleLinkedListNode<T> {
    return {
        val,
        prev: null,
        next: null,
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

/* 找到链表尾节点 */
export function find_list_tail<T>(head: ListNode<T>): ListNode<T> {
    let p = head
    while (p.next) {
        p = p.next
    }
    return p
}

/* 找到链表第n个节点 */
export function find_nth_node_in_list<T>(head: ListNode<T>, n: number): ListNode<T> | null {
    let p: ListNode<T> | null = head
    while (n && p) {
        p = p.next
        n--
    }
    return p
}

/* 创建循环列表 */
export function create_cycle_list(vals: number[], pos: number) {
    let head = create_list_by_vals(...vals)
    if (pos >= 0) {
        let pos_node = find_nth_node_in_list(head, pos)
        if (!pos_node) {
            throw `no pos: ${pos} at arr ${vals}`
        }
        find_list_tail(head).next = pos_node
    }
    return head
}