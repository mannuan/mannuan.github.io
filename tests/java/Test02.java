import java.util.LinkedList;
import java.util.Scanner;
public class Test02 {
	Scanner scanner = new Scanner(System.in);
	class TreeNode {
        int val = 0;
        TreeNode left = null;
        TreeNode right = null;
     
        public TreeNode(int val) {
            this.val = val;
     
        }
    }
	public TreeNode createTree(TreeNode root) {
		String val;
		val = scanner.next(); // next方法每次取到一个间隔符前面的数据
		if(val.equals("#")) {
			return null;
		}
		root = new TreeNode(Integer.parseInt(val));//  System.out.println("输入的数据为：" + val);
		root.left = createTree(root.left);
		root.right = createTree(root.right);
		return root;
	}
	// 得到二叉树的镜像  —— 递归的方式
    public void Mirror(TreeNode root) {
    	if(root == null) {
    		return;
    	}
    	if((root.left == null) && (root.right == null)) {
    		return;
    	}
    	TreeNode temp = root.left;
    	root.left = root.right;
    	root.right = temp;
    	Mirror(root.left);
    	Mirror(root.right);
    }
    public void MirrorNotRecursive(TreeNode root) {
        java.util.LinkedList<TreeNode> queue = new java.util.LinkedList<TreeNode>();
        TreeNode temp = null;
        if(root == null) {
            return;
        }
        queue.add(root);
        while(queue.size() != 0) {
            TreeNode node = queue.removeFirst();
            temp = node.left;
            node.left = node.right;
            node.right = temp;
            if(node.right != null) {
                queue.add(node.right); // 入队的为原来的左孩子
            }
            if(node.left != null){
                queue.add(node.left);
            }
        }
    }
    public void levelTraverse(TreeNode root) {
     	if (root == null) {
    		 return;
     	}
    	 LinkedList<TreeNode> list = new LinkedList<TreeNode>();
    	 list.add(root);
    	 while (list.size() != 0) {
     		TreeNode node = list.removeFirst(); // list.removeFirst() 该方法LinkedList才有
    		System.out.print(node.val + " ");
     		if(node.left != null) {
    			 list.add(node.left);  // list.add()添加单个元素，如果不指定索引的话，元素将被添加到链表的最后
    		}
    		if(node.right != null) {
    			list.add(node.right);
    		}
    	}
    }
    
    public static void main(String[] args) {
    	Test02 solution = new Test02();
    	TreeNode root = null;
    	root = solution.createTree(root);
    	System.out.println("原二叉树的层次遍历");
    	solution.levelTraverse(root);
    	solution.Mirror(root);
    	System.out.println("\n输出该二叉树的镜像");
    	solution.levelTraverse(root);
    	solution.MirrorNotRecursive(root);
    	System.out.println("\n输出该二叉树的镜像（非递归方式）");
    	solution.levelTraverse(root);
    }
}
 
/*
 * 测试数据：
 * 1 2 3 # 4 # # 5 6 # # # 7 8 # # 9 10 # # 11 # #  （说明：其中#说明左右子树为空）
 * 用先序遍历来建立树后，层次遍历结果为： 1 2 7 3 5 8 9 4 6 10 11
 * 反转二叉树之后：1 7 2 9 8 5 3 11 10 6 4 
 */