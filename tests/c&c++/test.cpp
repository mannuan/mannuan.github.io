#include<iostream>
using namespace std;
int main(){
    int n,max = 9;
    cin>>n;
    if(n<10){
        cout<<n;
    }else if(n==10){
        cout<<9;
    }else{
        for(int i=11; i<=n; i++){
            int temp = i;
            int now = 1;
            while(temp > 0){
                now*= temp%10;
                temp/=10;
            }
            if(now <max){
                max=now;
            }
        }
        cout<<max;
    }
    return 0;
}