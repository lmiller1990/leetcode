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
  let dummy = new ListNode();
  let n1 = list1;
  let n2 = list2;
  let temp = dummy;

  while (n1 && n2) {
    // 1 <= 4
    if (n1.val <= n2.val) {
      // temp.next = val: 1
      // temp.next = val: 1, next: n2
      temp.next = new ListNode(n1.val);

      // n1 = n1.next = val: 2, next: l1n3
      n1 = n1.next;

    } else {
      temp.next = new ListNode(n2.val);
      n2 = n2.next;
    }

    // temp = temp.next = n2
    temp = temp.next;
  }

  if (n1) temp.next = n1;
  if (n2) temp.next = n2;

  return dummy.next;
}

const l1n3 = new ListNode(3, undefined);
const l1n2 = new ListNode(2, l1n3);
const l1n1 = new ListNode(1, l1n2);

const l2n3 = new ListNode(4, undefined);
const l2n2 = new ListNode(4, l2n3);
const l2n1 = new ListNode(4, l2n2);

let res = mergeTwoLists(l1n1, l2n1);

// if (res) {
//   while (res.next) {
//     console.log(res.val);
//     res = res.next;
//   }
//   console.log(res.val);
// }
