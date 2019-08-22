import java.util.HashSet;
import java.util.Scanner;

public class Test02 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String sn = scanner.nextLine();
        int n = Integer.valueOf(scanner.nextLine());
        String[] gns = new String[n];
        HashSet[] g = new HashSet[n];
        for(int i = 0; i < n; i++){
            gns[i] = scanner.nextLine();
            String[] names = gns[i].split(",");
            g[i] = new HashSet<String>();
            for (String name : names) {
                g[i].add(name);
            }
        }

        HashSet<String> res = new HashSet<>();
        res.add(sn);
        for (int k = 1; k <=2; k ++){
            for (int i = 0; i < n; i++){
                boolean isCur = false;
                for (String name : res) {
                    if(g[i].contains(name)){
                        isCur = true;
                        break;
                    }
                }

                if(isCur){
                    res.addAll(g[i]);
                }
            }
        }

        System.out.println(res.size());


    }
}