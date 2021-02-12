//https://app.codility.com/c/run/trainingPRJRBG-FKC/

function solution(A) {
    A.sort((a, b) => a-b)
    if(A.length < 3) return 0;
    if (A.length == 3){
        if(A[0] + A[1] > a[2]){
            return 1
        }else {
            return 0
        }
    }

    let i = A.length - 1;;
    let j = A.length - 2;;
    let k = 0;

    while(j != 1){
        if (A[k] + A[j] > A[i]){
            return 1
        }
        else if(A[k] + A[j] <= A[i]){
            if(k == j-1){
                k = 0;
                j--;
                i--;
            }else{
                k++;
            }          
        }
    }

    return 0
}