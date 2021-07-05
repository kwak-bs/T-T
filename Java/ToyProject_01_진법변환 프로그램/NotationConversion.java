package Toy1;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
/*
 N������ �޾� K�������� ����� ������Ʈ 
 2���� ~16������ �Է¹޾�,  2���� ~16������ ��ȯ���ִ� ���α׷�
  ������ �Է¹ް� 10������ �� ��ȯ�� ���� �ٽ� ���ϴ� ������ ��ȯ���Ѻ���.
*/
public class NotationConversion {

	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		System.out.println("�� ������ �Է��Ͻðڽ��ϱ�? (2~16���Է¸� �����մϴ�.)");
		int notation = Integer.parseInt(br.readLine());
		
		System.out.println("���� �Է��� �ּ���. 10�̻��� �빮�ڸ� �Է��Ͻʽÿ�.");
		String number = br.readLine();

		// ���� �Է� ���� ������ ������ 10�������� �ٲ��ش�. 
		int decimal = makeDecimal(notation, number);

		System.out.println("�� ������ �ٲٽðڽ��ϱ�?");
		int target = Integer.parseInt(br.readLine());
		
		String answer = conversion(decimal, target);
		
		System.out.print("��� : " + answer);
	}
	
	public static int makeDecimal(int notation, String number) {
		
		int result = 0;
		// �Է��� 10������ ��� �ٷ� ���� 
		if(notation == 10) {
			return Integer.parseInt(number);
		}
		
		else if(notation >= 2 && notation <= 16){
			char[] num = number.toCharArray();
			/*
			 ���� 10������ ���� �� �־��� �������� ������ �ڸ��� ���� �ڸ��� ���� ��������
			 ù° �ڸ����� ���ϴ� ���ĵ� �ִ�. 0���� �����Ͽ� ������ �����ְ� �� �ڸ� �� ���ڸ� �����ش�. �׸��� �� ����� ���� �ڸ����� �� �� ������ �����ְ� ���� �ڸ��� ���� �����ش�. �ݺ�. 
			 */
			for(int i=0; i<num.length; i++) {
				
				if(!errorCheck(num[i], notation)) {
					System.out.println("�߸��� �Է��Դϴ�. ���α׷��� �ٽ� �����Ͽ� �Է����ּ���.");
					System.exit(0);
				}
				// 10�̻��� ���ڴ� 'A'�� ���� +10�� ���ָ� �ȴ�. 
				if(num[i] >= 'A') {
					result = result * notation + (num[i] - 'A' + 10);
				}
				else {
					result = result * notation + (num[i] - '0'); 
				}
			}
		}
		
		else {
			System.out.println("����� �� ���� �����Դϴ�. ���α׷��� �ٽ� �����Ͻʽÿ�.");
			System.exit(0);
		}
		
		return result;
	}
	
	public static String conversion(int decimal, int N) {
		StringBuilder sb = new StringBuilder();
		
		int current = decimal;
		
		while(current > 0) {
			// N�������� �������µ� 10���� ������ �ٷ� �߰� 
			if(current % N < 10) {
				sb.append(current % N);
			}
			
			// 10�̻��� ���ĺ����� ǥ���Ѵ�. 
			else {
				// 10������ �����ִ� ���� �ݴ�� �������ָ� �ȴ�. 10�̻��� ������ ǥ���� �� �ֱ� ������ 10�� ���ִ� ���̴�. 
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
