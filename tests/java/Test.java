import java.util.Scanner;
public class Test{
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int m = scanner.nextInt();
        int[][] arr = new int[n][m];
        String lineNum = "";
        scanner.nextLine();
        for(int i=0; i<n;i++){
            lineNum = scanner.nextLine();
            for(int j=0; j<lineNum.length(); j++){
                arr[i][j] = lineNum.charAt(j);
            }
        }
        int r1 = scanner.nextInt();
        int c1 = scanner.nextInt();
        int r2 = scanner.nextInt();
        int c2 = scanner.nextInt();
        int temp = arr[r1][c1];
        arr[r1][c1] = arr[r2][c2];
        arr[r2][c2] = temp;

        int count = 0;
        int changeTemp = 0;
        for(int i=0; i<n; i++){
            count = 1;
            for(int j=0;j<m-1; j++){
                if(Math.abs(arr[i][j])==Math.abs(arr[i][j+1])){
                    count++;
                }else{
                    count=1;
                }
                if(count>=3){
                    changeTemp = -1;
                    while(changeTemp!=count-1){
                        if(arr[i][j-changeTemp]>0){
                            arr[i][j-changeTemp] = -arr[i][j-changeTemp];
                        }
                        changeTemp++;
                    }
                }
            }
        }
        count =0;
        changeTemp = 0;
        for(int j=0; j<m; j++){
            count =1;
            for(int i=0;i<n-1;i++){
                if(Math.abs(arr[i][j])==Math.abs(arr[i+1][j])){
                    count++;
                }
                else{
                    count =1;
                }
                if(count>=3){
                    changeTemp = -1;
                    while(changeTemp!=count-1){
                        if(arr[i-changeTemp][j]>0){
                            arr[i-changeTemp][j] = -arr[i-changeTemp][j];
                        }
                        changeTemp ++;
                    }
                }
            }
        }
        int result = 0;
        for(int i=0; i<n; i++){
            for(int j=0; j<m; j++){
                if(arr[i][j]<0){
                    result++;
                }
            }
        }
        System.out.println(result);
    }
}