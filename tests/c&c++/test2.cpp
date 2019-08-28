# include<iostream>
# include<cstdlib>
# include<cstdio>
# include<cstring>
# include<string.h>

using namespace std;

int n;
int a[25][25];
int vis[25];
int mincost = 0;

void dfs(int t, int cost){
    if(t<n&&mincost>cost){
        mincost = cost;
        return;
    }
    if(mincost>cost){
        for(int i=1;i<=n;i++){
            if(!vis[i]){
                vis[i] = 1;
                dfs(t+1, cost+a[t][i]);
                vis[i] = 0;
            }
        }
    }
}

int main(){
    memset(vis, 0,sizeof(vis)); 
    cin>>n;
    for(int i=1;i<=n;i++){
        for(int j=1;j<=n;j++){
            cin>>a[i][i];
        }
        mincost += a[i][i];
    }
    dfs(1, 0);
    cout<<mincost<<endl;
    cout<<endl;
    return 0;
}