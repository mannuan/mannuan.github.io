#include<iostream>
#include<vector>
using namespace std;
int main(){
    int n,q;
    cin>>n>>q;
    vector<int> c;
    int x;
    vector<int> answer;
    for(int i=0;i<n;++i){
        cin>> x;
        c.push_back(x);
    }
    int num =0;
    for(int i=0;i<q;++i){
        cin>>x;
        for(int j=0;j<n;++j){
            if(c[j]>=x){
                num++;
                c[j]--;
            }
        }
        answer.push_back(num);
        num =0;
    }
    for(int i=0;i<answer.size();++i){
        cout<<answer[i]<<endl;
    }
    return 0;
}
// 4 3
// 1 2 3 4
// 4
// 3
// 1