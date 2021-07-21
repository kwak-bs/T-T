package Toy1;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class binary2Hex {

	// 2진법 -> 16진법 변환하기
	public static void main(String[] args) throws IOException {
		
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		System.out.print("2진수를 입력하십시오 : " );
		String binary = br.readLine();
		
		System.out.println(binToHex(binary));
	}
	
	public static String binToHex(String binary) {
		String answer = "";
		StringBuilder sb = new StringBuilder();
		
		int length = binary.length();
		// 4로 나누어 떨어질 때까지 0을 앞에다 추가해준다. 
		// 4자리로 끊기 위함.
		while(length % 4 != 0) {
			sb.append("0");
			length++;
		}
		
		binary = sb.toString() + binary;
		
		// 전체 길이에서 4로 나눠줌으로써 총 반복횟수 결정.
		for(int i=0; i<length / 4; i++) {
			// 4자리씩 끊은 2진수 저장. 
			String subBinary = binary.substring(i*4, i*4+4);
			int Hex = 0;
			
			// 10진법의 수를 K진법으로 바꾸는 방법과 유사. 
			// 앞에서부터 진법을 차례대로 곱해가면서 현재 자리의 수를 더해준다.
			for(int j = 0; j<subBinary.length(); j++) {
				char num = subBinary.charAt(j);
				if(num >= '0' && num <= '9') {
					Hex = Hex * 2 + (num-'0');
				}
				else {
					Hex = Hex * 2 + (num - 'A' + 10);
				}
			}
			
			if(Hex >= 10) answer += (char)(Hex - 10 + 'A');
			else answer += Hex;
		}
		return "0x"+answer;
	}
}
