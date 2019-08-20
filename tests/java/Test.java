import java.util.Scanner;
public class Test{
    public static int lenLongestSubstr(String s){
        int[] hash = new int[256];
        int max = 0;
        int i=0,j=0,count=0;
        while(i<s.length()&&j<s.length()){
            char ch = s.charAt(j);
            if(hash[ch]==0){
                hash[ch] =1;
                j++;
                max=(j-i)>max?(j-i):max;
            }else{
                char c = s.charAt(i);
                hash[c] =0;
                i++;
            }
            count++;
        }
        return max;
    }
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String line = scanner.nextLine();
        // scanner.close();
        // String s = "abcabcbb";
        System.out.println(lenLongestSubstr(line));
    }
}