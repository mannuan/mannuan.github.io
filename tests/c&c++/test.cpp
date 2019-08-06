# include<iostream>
# include<cstring>
# include<algorithm>
# include<string>
using namespace std;
int main(){
    int n,a[100001],i,j,k,b[100001],min = 100000000, max=0;
    cin>> n;

    for(i=0;i<n;i++){
        cin>>a[i];
        if(a[i]<min){
            min=a[i];
        }
        if(a[i] > max){
            max = a[i];
        }
    }
    cout<<min;
    for(i=2;i<n;i++){
        int cnt =0;
        memset(b, 0, sizeof(b));
        for(j=0;j<=n-i;j++){
            int max = 0;
            for(k=j;k<j+i;k++){
                if(a[k]>max){
                    max = a[k];
                }
            }
            b[cnt++] = max;
        }
        sort(b, b+cnt);
        cout<<" "<<b[0];
    }
    cout<<" "<<max;
    return 0;
}