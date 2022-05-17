/**
 * Definition for singly-linked list.
 */
let id = 0;
class ListNode {
  val: number;
  next: ListNode | undefined;
  id: number;

  constructor(val?: number, next?: ListNode | undefined) {
    this.id = id;
    id++;
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? undefined : next;
  }
}

function mergeTwoLists(
  list1: ListNode | undefined,
  list2: ListNode | undefined
): ListNode | undefined {
  let head = new ListNode();
  let output = head;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      head.next = list1;
      list1 = list1.next;
    } else {
      head.next = list2;
      list2 = list2.next;
    }
    head = head.next;
  }

  if (list1) {
    head.next = list1;
  } else if (list2) {
    head.next = list2;
  }

  return output.next;
}

const l1n3 = new ListNode(3, undefined);
const l1n2 = new ListNode(2, l1n3);
const l1n1 = new ListNode(1, l1n2);

const l2n3 = new ListNode(4, undefined);
const l2n2 = new ListNode(4, l2n3);
const l2n1 = new ListNode(4, l2n2);

let res = mergeTwoLists(l1n1, l2n1);

if (res) {
  while (res.next) {
    console.log(res.val);
    res = res.next;
  }
  console.log(res.val);
}
