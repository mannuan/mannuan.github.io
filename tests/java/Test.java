import java.util.*;
public class Test{
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        String line = scanner.nextLine();
        char[] s = line.toCharArray();
        int[] nums = new int[s.length];
        int cha = 0;
        StringBuilder stringBuilder = new StringBuilder(line);
        String temp = stringBuilder.toString();
        List<Integer> res = new ArrayList<>();
        
        while(true){
            int index=temp.indexOf("RL");
            if(index==-1) break;
            res.add(index+cha);
            if(temp.length()<=index+2) break;
            cha+=index+2;
            temp = temp.substring(index+2);
        }
        int l=0;
        for(int i=0;i<res.size();i++)
        {
            int st = res.get(i);
            nums[st] = 1;
            nums[st+1]=1;
            for(int p=l;p<st;p++)
            {
                if((st-p)%2==0) nums[st]++;
                else nums[st+1]++;
            }
            int index = st+2;
            while(index<line.length() && line.charAt(index)=='L'){
                if((index-st)%2==0) nums[st]++;
                else nums[st+1]++;
                index++;
            }
            l=index;
        }
        for(int i=0;i<nums.length;i++){
            System.out.print(nums[i]+(i==nums.length-1?"":" "));
        }
        System.out.println();
    }
}