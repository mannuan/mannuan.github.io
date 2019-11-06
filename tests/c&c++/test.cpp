# include<cstdio>
# include<iostream>
# include<cstring>
using namespace std;
void fun(int& a, int& b, int c, int d){
    unsigned long long b1,a1, m,i,t1=a,t2=b, t3=c, t4=d;
    b1=t2*t4,a1=t1*t4+t2*t3;
    m=min(a1, b1);
    for(i=2; i<=m;i++){
        if(a1%i ==0 && b1%i ==0){
            a1/=i;
            b1/=i;
            i=1;
            m=min(a1, b1);
        }
        a= a1, b=b1;
    }
}
int Pow(int i){
    int t=1;
    for(int j=1; j<=i; j++){
        t*=10;
    }
    return t;
}
int P1(int i){
    int t=0;
    for(int j=1; j<=i;j++){
        t=t*10+9;
    }
    return t;
}
int main(){
    int a, i, a1, a2, n, flag;
    char s1[10], s2[10], s3[10],t;
    // while(cin>>n&&n){
        // getchar();
        // while(n--){
            flag=0;
            s1[0]=s1[0]=s3[0]=0;
            i=0;
            t=getchar();
            if(t=='-'){
                flag=1;
            }else{
                s1[i++]=t;
            }
            while(1){
                t=getchar();
                if(t=='\n'){
                    s1[i]=0;
                    goto End;
                }
                if(t=='.'){
                    s1[i] = 0;
                    break;
                }
                s1[i++] =t;
            }
            i = 0;
            while(1){
                t=getchar();
                if(t=='('){
                    s2[i] = 0;
                    break;
                }
                if(t=='\n'){
                    s2[i]=0;
                    goto End;
                }
                s2[i++]=t;
            }
            i=0;
            while(1){
                t=getchar();
                if(t==')'){
                    s3[i]=0;
                    getchar();
                    goto End;
                }
                s3[i++] = t;
            }
            End:;
            a1=0;
            a2=1;
            if(strlen(s1)!=0&&s1[0]!='0'){
                sscanf(s1, "%d", &a);
                a1=a;
            }
            if(strlen(s2)!=0){
                sscanf(s2, "%d", &a);
                fun(a1, a2, a, Pow(strlen(s2)));
            }
            if(strlen(s3)!=0){
                sscanf(s3, "%d", &a);
                fun(a1, a2, a, P1(strlen(s3))*Pow(strlen(s2)));
            }
            if(flag){
                cout<<'-';
            }
            cout<<a1<<'/'<<a2<<endl;
        // }
    // }
    return 0;
}