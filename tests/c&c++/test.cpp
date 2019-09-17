#include<iostream>
using namespace std;
class TestClass{
    private:
    int number;
    public:
    TestClass(int n){
        number = n;
    }
    TestClass(const TestClass& rhs){
        number = rhs.number;
        std::cout<<"1"<<std::endl;
    }
    TestClass operator=(const TestClass& rhs){
        number = rhs.number;
        return *this;
    }
};
int main(){
    TestClass a(1), b(2), c(3);
    a = b = c;
    return 0;
}