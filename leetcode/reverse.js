/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let y = x
        if(x === 0) return 0;
        if(x < 0){
            x = x * -1
        }
        let arr = x.toString().split('')
        
        while(arr[arr.length - 1] == 0){
            arr.pop()
        }
    
        arr.reverse()
        let int = parseInt(arr.join(""))
        let signedInt = 2147483647
        
        if (int >= signedInt){
            return 0
        }
         
        if(y < 0){
            return int * -1
        } else {
            return int  
        }
    
    
    };

/*

You create a node using  a class and a constructor. You set the value of the node using this.val = val and 
you do the same with setting the next node. You do that using this.next = node 
For the first. it will jsut be null until we make a new value.

A singly linked list is also created using a class. We use a constructor to create this list. 
THe list is a snake of nodes. You create the nodes and you set, for example, this.head = to the node you created.
You create a node using let bryant = new Node(18). chelsey = new Node(20) 
bryant.next = chelsey (I believe)

A singly linked list has 3 methods. this.head, this.tail, and this.length

We can add to the linked list using push. The functioon is constructed by first checking if their is a head. If not, that means the function
is an empty list. If this is empty set the node to the head and to the tail of the linked list. 
IF there is a head will will set the tail to the node we are pushing.

To remove the last node in an linked list we'll use pop(). Not sure.

when shifting, meaning we are moving a node to the front. We move the head to the left. 
When unshifting we remove the first node.




























*/