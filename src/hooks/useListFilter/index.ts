import { useState } from "react";

const useListFilter = (list: any[], query: string) => {
    const [filteredList, setFilteredList] = useState<any[]>(list);

    const updateFilteredList = (): void => {
        const filteredList: any[] = [];
        const itemsAllTextLists = list.map((item) => Object.values(item).map((value) => String(value)));
        
        itemsAllTextLists.forEach((itemAllTextList, itemIndex) => {
            for (let index = 0; index < itemAllTextList.length; index++) {
                if (itemAllTextList[index].includes(query)) {
                    filteredList.push(list[itemIndex]);

                    break;
                }
            }
        });

        setFilteredList(filteredList);
    }

    return { filteredList, setFilteredList, updateFilteredList };
}

export default useListFilter;