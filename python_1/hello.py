def calculate_average(number_list):
    """
    This function takes a list of numbers and returns the average.
    """
    total_sum = sum(number_list)  
    number_count = len(number_list)  
    average = total_sum / number_count  
    return average


numbers = [10, 20, 30, 40, 50]


average_of_numbers = calculate_average(numbers)
print(f"The average of the list is: {average_of_numbers}")

if average_of_numbers > 30:
    print("The average is high.")
else:
    print("The average is low.")

print("Numbers multiplied by 2:")
for number in numbers:
    print(number * 2)
