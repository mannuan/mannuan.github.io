import java.util.*;
import java.math.BigInteger;
public class Test02{
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int num = scanner.nextInt();
		while(num>0){
			int n = scanner.nextInt();
			int m = scanner.nextInt();
			int[] heaps = new int[n];
			for(int i=0; i<heaps.length; i++){
				heaps[i] = scanner.nextInt();
			}
			BigInteger bag = new BigInteger(String.valueOf(m));
			boolean ifFinsh = true;
			for(int i=0; i<heaps.length; i++){
				if(i==0){
					if(heaps[i]!=0){
						bag = bag.add(new BigInteger(String.valueOf(heaps[i])));
						heaps[i] = 0;
					}
				}else{
					int curMinval = heaps[i-1]+1;
					if(curMinval > heaps[i]){
						int subVal = curMinval - heaps[i];
						if(bag.compareTo(new BigInteger(String.valueOf(subVal)))<0){
							ifFinsh = false;
							break;
						}
						heaps[i] = curMinval;
						bag = bag.subtract(new BigInteger(String.valueOf(subVal)));
					}else if(curMinval<heaps[i]){
						int subVal = heaps[i];
						heaps[i] = curMinval;
						bag = bag.add(new BigInteger(String.valueOf(subVal)));
					}
				}
			}
			if(ifFinsh){
				System.out.println("YES");
			}else{
				System.out.println("NO");
			}
			num --;
		}
	}
}