
package DSA;

import java.util.Arrays;
import java.util.Hashtable;

public class TwoNumbersSum {

    public static void main(String[] args) {
        // TODO Auto-generated method stub

        int[] inputNums = { 3, 5, -4, 8, 11, 1, -1, 6 };
        int targetSum = 10;

        // calling brute force method
        int[] resultBruteForce = null;
        resultBruteForce = bruteForceMethod(inputNums, targetSum);
        System.out.println("Results using Brute Force Method");
        System.out.println(resultBruteForce[0] + " " + resultBruteForce[1]);

        // calling Hashtable method

        int[] resultHashtable = null;
        System.out.println("Results using HashTable Method");

        resultHashtable = hashTableMethod(inputNums, targetSum);
        System.out.println(resultHashtable[0] + " " + resultHashtable[1]);

        // calling twopointer method

        int[] resultTwoPointer = null;
        System.out.println("Results using Two Pointer Method");

        resultTwoPointer = twoPointerMethod(inputNums, targetSum);
        System.out.println(resultTwoPointer[0] + " " + resultTwoPointer[1]);

    }

    public static int[] bruteForceMethod(int[] inputNums, int targetSum) {

        int[] result = { -1, -1 };

        for (int i = 0; i < inputNums.length; i++) {

            for (int j = 0; j < (inputNums.length) && j != i; j++) {
                if (inputNums[i] + inputNums[j] == targetSum) {
                    result[0] = inputNums[i];
                    result[1] = inputNums[j];
                }
            }

        }
        return result;

    }

    public static int[] hashTableMethod(int[] inputNums, int targetSum) {
        int[] result = { -1, -1 };

        Hashtable<Integer, String> inputHashtable = new Hashtable<Integer, String>();

        for (int k = 0; k < inputNums.length; k++)

        {

            int unknown = targetSum - inputNums[k];
            if (inputHashtable.containsKey(unknown)) {
                result[0] = inputNums[k];
                result[1] = unknown;
                break;

            } else {
                inputHashtable.put(inputNums[k], "adding as its not present");
            }
        }
        return result;

    }

    public static int[] twoPointerMethod(int[] inputNums, int targetSum) {

        int[] result = { -1, -1 };

        int LHS = 0;
        int RHS = inputNums.length - 1;

        // making a copy of the array

        int[] sortrdInput = Arrays.copyOf(inputNums, inputNums.length);
        Arrays.sort(sortrdInput);

        while (LHS < RHS) {
            if (sortrdInput[LHS] + sortrdInput[RHS] == targetSum) {

                result[0] = sortrdInput[LHS];
                result[1] = sortrdInput[RHS];
                break;
            } else if (sortrdInput[LHS] + sortrdInput[RHS] > targetSum) {
                RHS--;
            } else if (sortrdInput[LHS] + sortrdInput[RHS] < targetSum) {
                LHS++;
            }

        }

        return result;

    }
}
