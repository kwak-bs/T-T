package Toy1;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
/*
 N진수를 받아 K진법으로 만드는 프로젝트 
 2진수 ~16진수를 입력받아,  2진수 ~16진수로 변환해주는 프로그램
  진수를 입력받고 10진수로 다 변환한 다음 다시 원하는 진수로 변환시켜보자.
*/
public class NotationConversion {

	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		System.out.println("몇 진수를 입력하시겠습니까? (2~16만입력만 가능합니다.)");
		int notation = Integer.parseInt(br.readLine());
		
		System.out.println("수를 입력해 주세요. 10이상은 대문자를 입력하십시오.");
		String number = br.readLine();

		// 먼저 입력 받은 각각의 진수를 10진법으로 바꿔준다. 
		int decimal = makeDecimal(notation, number);

		System.out.println("몇 진수로 바꾸시겠습니까?");
		int target = Integer.parseInt(br.readLine());
		
		String answer = conversion(decimal, target);
		
		System.out.print("결과 : " + answer);
	}
	
	public static int makeDecimal(int notation, String number) {
		
		int result = 0;
		// 입력이 10진법인 경우 바로 리턴 
		if(notation == 10) {
			return Integer.parseInt(number);
		}
		
		else if(notation >= 2 && notation <= 16){
			char[] num = number.toCharArray();
			/*
			 보통 10진법을 구할 때 주어진 진수에서 마지막 자리인 일의 자리수 부터 구하지만
			 첫째 자리부터 구하는 공식도 있다. 0부터 시작하여 진수와 곱해주고 각 자리 수 숫자를 더해준다. 그리고 그 결과를 다음 자리수로 갈 때 진수와 곱해주고 현재 자리수 값을 더해준다. 반복. 
			 */
			for(int i=0; i<num.length; i++) {
				
				if(!errorCheck(num[i], notation)) {
					System.out.println("잘못된 입력입니다. 프로그램을 다시 실행하여 입력해주세요.");
					System.exit(0);
				}
				// 10이상의 숫자는 'A'를 빼고 +10을 해주면 된다. 
				if(num[i] >= 'A') {
					result = result * notation + (num[i] - 'A' + 10);
				}
				else {
					result = result * notation + (num[i] - '0'); 
				}
			}
		}
		
		else {
			System.out.println("계산할 수 없는 진수입니다. 프로그램을 다시 실행하십시오.");
			System.exit(0);
		}
		
		return result;
	}
	
	public static String conversion(int decimal, int N) {
		StringBuilder sb = new StringBuilder();
		
		int current = decimal;
		
		while(current > 0) {
			// N진법으로 나누었는데 10보다 작으면 바로 추가 
			if(current % N < 10) {
				sb.append(current % N);
			}
			
			// 10이상은 알파벳으로 표기한다. 
			else {
				// 10진수를 구해주는 법과 반대로 수행해주면 된다. 10이상의 수부터 표현할 수 있기 때문에 10을 빼주는 것이다. 
				sb.append((char)(current % N - 10 + 'A'));
			}
			current /= N;
		}
		return sb.reverse().toString();
	}
	
	public static boolean errorCheck(char num, int notation) {
		int n = 0;
		if(num >= 'A') {
			n = num - 'A' + 10;
		}
		
		else {
			n = num - '0';
		}
		
		if(n >= notation) {
			return false;
		}
		return true;
	}
	
	
}
