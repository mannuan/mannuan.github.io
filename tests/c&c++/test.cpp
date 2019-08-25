#include<iostream>
#include<string.h>
typedef long long ll;
const int maxn = 1e3 + 5;
const int INF = 0x3f3f3f3f;
const int MOD = 1e9 + 7;
using namespace std;
int main() {
    int n, flag = 0, sum;
    string p;
    cin >> n >> p;
    sum = p.length();
    for (int i = 0; i < p.length(); i++) {
        if (p[i] > 'Z' && flag == 1) {
            if (i + 1 < p.length() && p[i + 1] > 'Z') {
                flag = 0;
            }
            sum++;
        }
        else if (p[i] < 'a' && flag == 0) {
            if (i + 1 < p.length() && p[i + 1] < 'a') {
                flag = 1;
            }
            sum++;
        }
    }
    cout << sum << endl;
    return 0;
}