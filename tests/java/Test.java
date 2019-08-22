import java.util.HashSet;
import java.util.Scanner;

public class Test {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String sendName = scan.nextLine();
        int num = Integer.valueOf(scan.nextLine());
        String[] groupNames = new String[num];
        HashSet[] group = new HashSet[num];
        for(int i = 0; i < num; i++){
            groupNames[i] = scan.nextLine();
            String[] names = groupNames[i].split(",");
            group[i] = new HashSet<String>();
            for (String name : names) {
                group[i].add(name);
            }
        }

        HashSet<String> res = new HashSet<>();
        res.add(sendName);
        for (int k = 1; k <=2; k ++){
            for (int i = 0; i < num; i++){
                boolean isCur = false;
                for (String name : res) {
                    if(group[i].contains(name)){
                        isCur = true;
                        break;
                    }
                }

                if(isCur){
                    res.addAll(group[i]);
                }
            }
        }

        System.out.println(res.size());


    }
}