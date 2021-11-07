import {
GET_CODES_HOME
} from "../type.js"

const initial_state = {
  codes_home: [
    {
      id: 1,
      problem: "Linked List",
      label: "Linked List",
      solution: [
        {
          lang: "c++",
          code: `/**
                    * Definition for singly-linked list.
                    * struct ListNode {
                    *     int val;
                    *     ListNode *next;
                    *     ListNode(int x) : val(x), next(NULL) {}
                    * };
                    */
                   
                   void trimLeftTrailingSpaces(string &input) {
                       input.erase(input.begin(), find_if(input.begin(), input.end(), [](int ch) {
                           return !isspace(ch);
                       }));
                   }
                   
                   void trimRightTrailingSpaces(string &input) {
                       input.erase(find_if(input.rbegin(), input.rend(), [](int ch) {
                           return !isspace(ch);
                       }).base(), input.end());
                   }
                   
                   vector<int> stringToIntegerVector(string input) {
                       vector<int> output;
                       trimLeftTrailingSpaces(input);
                       trimRightTrailingSpaces(input);
                       input = input.substr(1, input.length() - 2);
                       stringstream ss;
                       ss.str(input);
                       string item;
                       char delim = ',';
                       while (getline(ss, item, delim)) {
                           output.push_back(stoi(item));
                       }
                       return output;
                   }
                   
                   ListNode* stringToListNode(string input) {
                       // Generate list from the input
                       vector<int> list = stringToIntegerVector(input);
                   
                       // Now convert that list into linked list
                       ListNode* dummyRoot = new ListNode(0);
                       ListNode* ptr = dummyRoot;
                       for(int item : list) {
                           ptr->next = new ListNode(item);
                           ptr = ptr->next;
                       }
                       ptr = dummyRoot->next;
                       delete dummyRoot;
                       return ptr;
                   }
                   
                   void prettyPrintLinkedList(ListNode* node) {
                     while (node && node->next) {
                         cout << node->val << "->";
                         node = node->next;
                     }
                   
                     if (node) {
                       cout << node->val << endl;
                     } else {
                       cout << "Empty LinkedList" << endl;
                     }
                   }
                   
                   int main() {
                       string line;
                       while (getline(cin, line)) {
                           ListNode* head = stringToListNode(line);
                           prettyPrintLinkedList(head);
                       }
                       return 0;
                   }`,
        },
        {
          lang: "python",
          code: `# Definition for singly-linked list.
                    # class ListNode(object):
                    #     def __init__(self, x):
                    #         self.val = x
                    #         self.next = None
                    
                    def stringToListNode(input):
                        # Generate list from the input
                        numbers = json.loads(input)
                    
                        # Now convert that list into linked list
                        dummyRoot = ListNode(0)
                        ptr = dummyRoot
                        for number in numbers:
                            ptr.next = ListNode(number)
                            ptr = ptr.next
                    
                        ptr = dummyRoot.next
                        return ptr
                    
                    def prettyPrintLinkedList(node):
                        import sys
                        while node and node.next:
                            sys.stdout.write(str(node.val) + "->")
                            node = node.next
                    
                        if node:
                            print(node.val)
                        else:
                            print("Empty LinkedList")
                    
                    def main():
                        import sys
                    
                        def readlines():
                            for line in sys.stdin:
                                yield line.strip('\n')
                    
                        lines = readlines()
                        while True:
                            try:
                                line = lines.next()
                                node = stringToListNode(line)
                                prettyPrintLinkedList(node)
                            except StopIteration:
                                break
                    
                    
                    if __name__ == '__main__':
                        main()
                    `,
        },
        {
          lang: "java",
          code: `
                    class Wrapper {
                        /**
                         * Definition for singly-linked list.
                         * public class ListNode {
                         *     int val;
                         *     ListNode next;
                         *     ListNode(int x) { val = x; }
                         * }
                         */
                        
                        public static int[] stringToIntegerArray(String input) {
                            input = input.trim();
                            input = input.substring(1, input.length() - 1);
                            if (input.length() == 0) {
                              return new int[0];
                            }
                        
                            String[] parts = input.split(",");
                            int[] output = new int[parts.length];
                            for(int index = 0; index < parts.length; index++) {
                                String part = parts[index].trim();
                                output[index] = Integer.parseInt(part);
                            }
                            return output;
                        }
                        
                        public static ListNode stringToListNode(String input) {
                            // Generate array from the input
                            int[] nodeValues = stringToIntegerArray(input);
                        
                            // Now convert that list into linked list
                            ListNode dummyRoot = new ListNode(0);
                            ListNode ptr = dummyRoot;
                            for(int item : nodeValues) {
                                ptr.next = new ListNode(item);
                                ptr = ptr.next;
                            }
                            return dummyRoot.next;
                        }
                        
                        public static void prettyPrintLinkedList(ListNode node) {
                          while (node != null && node.next != null) {
                              System.out.print(node.val + "->");
                              node = node.next;
                          }
                        
                          if (node != null) {
                            System.out.println(node.val);
                          } else {
                            System.out.println("Empty LinkedList");
                          }
                        }
                    }
                    
                    public class MainClass {
                        public static void main(String[] args) throws IOException {
                            BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
                            String line;
                            while ((line = in.readLine()) != null) {
                                ListNode node = Wrapper.stringToListNode(line);
                                Wrapper.prettyPrintLinkedList(node);
                            }
                        }
                    }
                    `,
        },
      ],
    },

    {
      id: 2,
      problem: "Binary Tree",
      label: "Binary Tree",

      solution: [
        {
          lang: "c++",
          code: `
                    /**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */

string treeNodeToString(TreeNode* root) {
    if (root == nullptr) {
      return "[]";
    }

    string output = "";
    queue<TreeNode*> q;
    q.push(root);
    while(!q.empty()) {
        TreeNode* node = q.front();
        q.pop();

        if (node == nullptr) {
          output += "null, ";
          continue;
        }

        output += to_string(node->val) + ", ";
        q.push(node->left);
        q.push(node->right);
    }
    return "[" + output.substr(0, output.length() - 2) + "]";
}

void trimLeftTrailingSpaces(string &input) {
    input.erase(input.begin(), find_if(input.begin(), input.end(), [](int ch) {
        return !isspace(ch);
    }));
}

void trimRightTrailingSpaces(string &input) {
    input.erase(find_if(input.rbegin(), input.rend(), [](int ch) {
        return !isspace(ch);
    }).base(), input.end());
}

TreeNode* stringToTreeNode(string input) {
    trimLeftTrailingSpaces(input);
    trimRightTrailingSpaces(input);
    input = input.substr(1, input.length() - 2);
    if (!input.size()) {
        return nullptr;
    }

    string item;
    stringstream ss;
    ss.str(input);

    getline(ss, item, ',');
    TreeNode* root = new TreeNode(stoi(item));
    queue<TreeNode*> nodeQueue;
    nodeQueue.push(root);

    while (true) {
        TreeNode* node = nodeQueue.front();
        nodeQueue.pop();

        if (!getline(ss, item, ',')) {
            break;
        }

        trimLeftTrailingSpaces(item);
        if (item != "null") {
            int leftNumber = stoi(item);
            node->left = new TreeNode(leftNumber);
            nodeQueue.push(node->left);
        }

        if (!getline(ss, item, ',')) {
            break;
        }

        trimLeftTrailingSpaces(item);
        if (item != "null") {
            int rightNumber = stoi(item);
            node->right = new TreeNode(rightNumber);
            nodeQueue.push(node->right);
        }
    }
    return root;
}

void prettyPrintTree(TreeNode* node, string prefix = "", bool isLeft = true) {
    if (node == nullptr) {
        cout << "Empty tree";
        return;
    }

    if(node->right) {
        prettyPrintTree(node->right, prefix + (isLeft ? "│   " : "    "), false);
    }

    cout << prefix + (isLeft ? "└── " : "┌── ") + to_string(node->val) + "\n";

    if (node->left) {
        prettyPrintTree(node->left, prefix + (isLeft ? "    " : "│   "), true);
    }
}

int main() {
    string line;
    while (getline(cin, line)) {
        TreeNode* root = stringToTreeNode(line);
        prettyPrintTree(root);
    }
    return 0;
}
                    `,
        },
        {
          lang: "java",
          code: `
                    class Wrapper {
                        /**
                         * Definition for a binary tree node.
                         * public class TreeNode {
                         *     int val;
                         *     TreeNode left;
                         *     TreeNode right;
                         *     TreeNode(int x) { val = x; }
                         * }
                         */
                        
                        public static String treeNodeToString(TreeNode root) {
                            if (root == null) {
                                return "[]";
                            }
                        
                            String output = "";
                            Queue<TreeNode> nodeQueue = new LinkedList<>();
                            nodeQueue.add(root);
                            while(!nodeQueue.isEmpty()) {
                                TreeNode node = nodeQueue.remove();
                        
                                if (node == null) {
                                  output += "null, ";
                                  continue;
                                }
                        
                                output += String.valueOf(node.val) + ", ";
                                nodeQueue.add(node.left);
                                nodeQueue.add(node.right);
                            }
                            return "[" + output.substring(0, output.length() - 2) + "]";
                        }
                        
                        public static TreeNode stringToTreeNode(String input) {
                            input = input.trim();
                            input = input.substring(1, input.length() - 1);
                            if (input.length() == 0) {
                                return null;
                            }
                        
                            String[] parts = input.split(",");
                            String item = parts[0];
                            TreeNode root = new TreeNode(Integer.parseInt(item));
                            Queue<TreeNode> nodeQueue = new LinkedList<>();
                            nodeQueue.add(root);
                        
                            int index = 1;
                            while(!nodeQueue.isEmpty()) {
                                TreeNode node = nodeQueue.remove();
                        
                                if (index == parts.length) {
                                    break;
                                }
                        
                                item = parts[index++];
                                item = item.trim();
                                if (!item.equals("null")) {
                                    int leftNumber = Integer.parseInt(item);
                                    node.left = new TreeNode(leftNumber);
                                    nodeQueue.add(node.left);
                                }
                        
                                if (index == parts.length) {
                                    break;
                                }
                        
                                item = parts[index++];
                                item = item.trim();
                                if (!item.equals("null")) {
                                    int rightNumber = Integer.parseInt(item);
                                    node.right = new TreeNode(rightNumber);
                                    nodeQueue.add(node.right);
                                }
                            }
                            return root;
                        }
                        
                        public static void prettyPrintTree(TreeNode node, String prefix, boolean isLeft) {
                            if (node == null) {
                                System.out.println("Empty tree");
                                return;
                            }
                        
                            if (node.right != null) {
                                prettyPrintTree(node.right, prefix + (isLeft ? "│   " : "    "), false);
                            }
                        
                            System.out.println(prefix + (isLeft ? "└── " : "┌── ") + node.val);
                        
                            if (node.left != null) {
                                prettyPrintTree(node.left, prefix + (isLeft ? "    " : "│   "), true);
                            }
                        }
                        
                        public static void prettyPrintTree(TreeNode node) {
                            prettyPrintTree(node,  "", true);
                        }
                    }
                    
                    public class MainClass {
                        public static void main(String[] args) throws IOException {
                            BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
                            String line;
                            while ((line = in.readLine()) != null) {
                                TreeNode root = Wrapper.stringToTreeNode(line);
                                Wrapper.prettyPrintTree(root);
                            }
                        }
                    }
                    `,
        },
        {
          lang: "python",
          code: `
                    # Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

def treeNodeToString(root):
    if not root:
        return "[]"
    output = ""
    queue = [root]
    current = 0
    while current != len(queue):
        node = queue[current]
        current = current + 1

        if not node:
            output += "null, "
            continue

        output += str(node.val) + ", "
        queue.append(node.left)
        queue.append(node.right)
    return "[" + output[:-2] + "]"

def stringToTreeNode(input):
    input = input.strip()
    input = input[1:-1]
    if not input:
        return None

    inputValues = [s.strip() for s in input.split(',')]
    root = TreeNode(int(inputValues[0]))
    nodeQueue = [root]
    front = 0
    index = 1
    while index < len(inputValues):
        node = nodeQueue[front]
        front = front + 1

        item = inputValues[index]
        index = index + 1
        if item != "null":
            leftNumber = int(item)
            node.left = TreeNode(leftNumber)
            nodeQueue.append(node.left)

        if index >= len(inputValues):
            break

        item = inputValues[index]
        index = index + 1
        if item != "null":
            rightNumber = int(item)
            node.right = TreeNode(rightNumber)
            nodeQueue.append(node.right)
    return root

def prettyPrintTree(node, prefix="", isLeft=True):
    if not node:
        print("Empty Tree")
        return

    if node.right:
        prettyPrintTree(node.right, prefix + ("│   " if isLeft else "    "), False)

    print(prefix + ("└── " if isLeft else "┌── ") + str(node.val))

    if node.left:
        prettyPrintTree(node.left, prefix + ("    " if isLeft else "│   "), True)

def main():
    import sys

    def readlines():
        for line in sys.stdin:
            yield line.strip('\n')

    lines = readlines()
    while True:
        try:
            line = lines.next()
            node = stringToTreeNode(line)
            prettyPrintTree(node)
        except StopIteration:
            break


if __name__ == '__main__':
    main()
                    `,
        },
      ],
    },

    {
      id: 3,
      problem: "Fibonacci",
      label: "Fibonacci",

      solution: [
        {
          lang: "c++",
          code: `
                    vector<uint64_t> generate_fibonaccis(int n) {
                        vector<uint64_t> fib(n);
                        fib[0] = 1;
                        fib[1] = 1;
                        for (int i = 2; i < n; ++i) {
                            fib[i] = fib[i - 2] + fib[i - 1];
                        }
                        return fib;
                    }
                    
                    int main() {
                        int n = 10;
                        vector<uint64_t> fib = generate_fibonaccis(n);
                        for (int i = 0; i < n; i++) {
                            std::cout << fib[i] << " ";
                        }
                        return 0;
                    }
                    `,
        },
        {
          lang: "java",
          code: `
                    public class Main {
                        public static long[] generateFibonaccis(int n) {
                            long[] fib = new long[n];
                            fib[0] = 1;
                            fib[1] = 1;
                            for (int i = 2; i < n; ++i) {
                                fib[i] = fib[i - 2] + fib[i - 1];
                            }
                            return fib;
                        }
                        public static void main(String[] args) {
                            int n = 10;
                            long[] fib = generateFibonaccis(n);
                            for (int i = 0; i < n; i++) {
                                System.out.print(Long.toUnsignedString(fib[i]) + " ");
                            }
                        }
                    }
                    `,
        },
        {
          lang: "python",
          code: `
                    def fib():
                    a, b = 1, 1
                    while True:
                        yield a
                        a, b = b, a + b
                
                for index, x in enumerate(fib()):
                    if index == 10:
                        break
                    print("%s" % x),
                    `,
        },
      ],
    },
  ],
};

/**
 * @description manage the codes used in several routes
 * @param {object} state 
 * @param {object} action 
 * @returns final state
 */
const codeReducer = ( state = initial_state, action ) => {

    const {type, payload} = action;

    switch(type){

        case GET_CODES_HOME :
            return{
                ...state,
                codes_home : payload
            }
        default:
            return initial_state;

    }


}

export default codeReducer;