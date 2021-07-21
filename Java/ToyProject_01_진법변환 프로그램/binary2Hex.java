package Toy1;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class binary2Hex {

	// 2���� -> 16���� ��ȯ�ϱ�
	public static void main(String[] args) throws IOException {
		
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		System.out.print("2������ �Է��Ͻʽÿ� : " );
		String binary = br.readLine();
		
		System.out.println(binToHex(binary));
	}
	
	public static String binToHex(String binary) {
		String answer = "";
		StringBuilder sb = new StringBuilder();
		
		int length = binary.length();
		// 4�� ������ ������ ������ 0�� �տ��� �߰����ش�. 
		// 4�ڸ��� ���� ����.
		while(length % 4 != 0) {
			sb.append("0");
			length++;
		}
		
		binary = sb.toString() + binary;
		
		// ��ü ���̿��� 4�� ���������ν� �� �ݺ�Ƚ�� ����.
		for(int i=0; i<length / 4; i++) {
			// 4�ڸ��� ���� 2���� ����. 
			String subBinary = binary.substring(i*4, i*4+4);
			int Hex = 0;
			
			// 10������ ���� K�������� �ٲٴ� ����� ����. 
			// �տ������� ������ ���ʴ�� ���ذ��鼭 ���� �ڸ��� ���� �����ش�.
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
