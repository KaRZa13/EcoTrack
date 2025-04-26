<!-- CreateListing.vue -->

<script>
import { ref } from 'vue'
import { useVueform, Vueform } from '@vueform/vueform'

export default {
  mixins: [Vueform],
  setup(props, context)
  {
    const form = useVueform(props, context)

    const vueform = ref({
      size: 'md',
      displayErrors: false,
      steps: {
        page0: {
          label: 'Transport',
          elements: [
            'h2',
            'checkboxgroup',
            'divider_1',
            'h2_7',
            'checkboxgroup_1',
            'divider_13',
            'h2_8',
            'checkboxgroup_2',
            'divider_14',
            'h2_9',
            'checkboxgroup_3',
            'divider_15',
            'h2_15',
            'checkboxgroup_4',
            'divider_16',
            'h2_14',
            'checkboxgroup_9',
            'divider_17',
            'h2_13',
            'checkboxgroup_8',
            'divider_19',
            'h2_12',
            'checkboxgroup_7',
            'divider_18',
            'h2_11',
            'checkboxgroup_6',
            'divider_21',
            'h2_10',
            'checkboxgroup_5',
            'divider_20',
          ],
          buttons: {
            previous: false,
          },
        },
        page1: {
          label: 'Logement',
          elements: [
            'h2_1',
            'checkboxgroup_12',
            'divider_2',
            'h2_16',
            'checkboxgroup_10',
            'divider_30',
            'h2_25',
            'checkboxgroup_11',
            'divider_29',
            'h2_24',
            'checkboxgroup_19',
            'divider_28',
            'h2_23',
            'checkboxgroup_13',
            'divider_27',
            'h2_22',
            'checkboxgroup_14',
            'divider_26',
            'h2_21',
            'checkboxgroup_15',
            'divider_25',
            'h2_20',
            'checkboxgroup_16',
            'divider_24',
            'h2_19',
            'checkboxgroup_17',
            'divider_23',
            'h2_18',
            'checkboxgroup_18',
            'divider_22',
          ],
        },
        page2: {
          label: 'Alimentation',
          elements: [
            'h2_2',
            'checkboxgroup_20',
            'divider_4',
            'h2_3',
            'checkboxgroup_21',
            'divider_5',
            'h2_17',
            'checkboxgroup_22',
            'divider_35',
            'h2_31',
            'checkboxgroup_23',
            'divider_34',
            'h2_32',
            'checkboxgroup_24',
            'divider_33',
            'h2_29',
            'checkboxgroup_29',
            'divider_32',
            'h2_30',
            'checkboxgroup_28',
            'divider_31',
            'h2_28',
            'checkboxgroup_27',
            'divider_3',
            'h2_27',
            'checkboxgroup_26',
            'divider',
            'h2_26',
            'checkboxgroup_25',
            'divider_6',
          ],
        },
        page3: {
          label: 'Numérique',
          elements: [
            'h2_4',
            'checkboxgroup_30',
            'divider_7',
            'h2_33',
            'checkboxgroup_31',
            'divider_43',
            'h2_34',
            'checkboxgroup_32',
            'divider_37',
            'h2_35',
            'checkboxgroup_39',
            'divider_36',
            'h2_36',
            'checkboxgroup_38',
            'divider_42',
            'h2_41',
            'checkboxgroup_37',
            'divider_41',
            'h2_40',
            'checkboxgroup_36',
            'divider_40',
            'h2_39',
            'checkboxgroup_35',
            'divider_39',
            'h2_38',
            'checkboxgroup_33',
            'divider_38',
            'h2_37',
            'checkboxgroup_34',
            'divider_8',
          ],
        },
        page4: {
          label: 'Consommation',
          elements: [
            'h2_5',
            'checkboxgroup_40',
            'divider_9',
            'h2_42',
            'checkboxgroup_41',
            'divider_10',
            'h2_43',
            'checkboxgroup_42',
            'divider_51',
            'h2_45',
            'checkboxgroup_43',
            'divider_50',
            'h2_44',
            'checkboxgroup_49',
            'divider_49',
            'h2_46',
            'checkboxgroup_48',
            'divider_48',
            'h2_50',
            'checkboxgroup_47',
            'divider_47',
            'h2_49',
            'checkboxgroup_46',
            'divider_46',
            'h2_48',
            'checkboxgroup_45',
            'divider_45',
            'h2_47',
            'checkboxgroup_44',
            'divider_44',
          ],
        },
        page5: {
          label: 'Loisirs',
          elements: [
            'h2_6',
            'checkboxgroup_50',
            'divider_11',
            'h2_51',
            'checkboxgroup_51',
            'divider_12',
            'h2_52',
            'checkboxgroup_52',
            'divider_59',
            'h2_59',
            'checkboxgroup_53',
            'divider_58',
            'h2_58',
            'checkboxgroup_54',
            'divider_57',
            'h2_57',
            'checkboxgroup_59',
            'divider_56',
            'h2_56',
            'checkboxgroup_58',
            'divider_55',
            'h2_55',
            'checkboxgroup_57',
            'divider_54',
            'h2_54',
            'checkboxgroup_56',
            'divider_53',
            'h2_53',
            'checkboxgroup_55',
            'divider_52',
          ],
        },
      },
      addClass: 'vf-create-listing',
      schema: {
        h2: {
          type: 'static',
          tag: 'h2',
          top: '1',
          content: 'Question 1',
        },
        checkboxgroup: {
          type: 'checkboxgroup',
          label: 'Checkbox group',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
        },
        divider_1: {
          type: 'static',
          tag: 'hr',
        },
        h2_7: {
          type: 'static',
          tag: 'h2',
          content: 'Question 2',
        },
        checkboxgroup_1: {
          type: 'checkboxgroup',
          label: 'Checkbox group',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
        },
        divider_13: {
          type: 'static',
          tag: 'hr',
        },
        h2_8: {
          type: 'static',
          tag: 'h2',
          content: 'Question 3',
        },
        checkboxgroup_2: {
          type: 'checkboxgroup',
          label: 'Checkbox group',
        },
        divider_14: {
          type: 'static',
          tag: 'hr',
        },
        h2_9: {
          type: 'static',
          tag: 'h2',
          content: 'Question 4',
        },
        checkboxgroup_3: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_15: {
          type: 'static',
          tag: 'hr',
        },
        h2_15: {
          type: 'static',
          tag: 'h2',
          content: 'Question 5',
        },
        checkboxgroup_4: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_16: {
          type: 'static',
          tag: 'hr',
        },
        h2_14: {
          type: 'static',
          tag: 'h2',
          content: 'Question 6',
        },
        checkboxgroup_9: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_17: {
          type: 'static',
          tag: 'hr',
        },
        h2_13: {
          type: 'static',
          tag: 'h2',
          content: 'Question 7',
        },
        checkboxgroup_8: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_19: {
          type: 'static',
          tag: 'hr',
        },
        h2_12: {
          type: 'static',
          tag: 'h2',
          content: 'Question 8',
        },
        checkboxgroup_7: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_18: {
          type: 'static',
          tag: 'hr',
        },
        h2_11: {
          type: 'static',
          tag: 'h2',
          content: 'Question 9',
        },
        checkboxgroup_6: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_21: {
          type: 'static',
          tag: 'hr',
        },
        h2_10: {
          type: 'static',
          tag: 'h2',
          content: 'Question 10',
        },
        checkboxgroup_5: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_20: {
          type: 'static',
          tag: 'hr',
        },
        h2_1: {
          type: 'static',
          content: 'Question 1',
          tag: 'h2',
          top: '1',
        },
        checkboxgroup_12: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_2: {
          type: 'static',
          tag: 'hr',
        },
        h2_16: {
          type: 'static',
          tag: 'h2',
          content: 'Question 2',
        },
        checkboxgroup_10: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_30: {
          type: 'static',
          tag: 'hr',
        },
        h2_25: {
          type: 'static',
          tag: 'h2',
          content: 'Question 3',
        },
        checkboxgroup_11: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_29: {
          type: 'static',
          tag: 'hr',
        },
        h2_24: {
          type: 'static',
          tag: 'h2',
          content: 'Question 4',
        },
        checkboxgroup_19: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_28: {
          type: 'static',
          tag: 'hr',
        },
        h2_23: {
          type: 'static',
          tag: 'h2',
          content: 'Question 5',
        },
        checkboxgroup_13: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_27: {
          type: 'static',
          tag: 'hr',
        },
        h2_22: {
          type: 'static',
          tag: 'h2',
          content: 'Question 6',
        },
        checkboxgroup_14: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_26: {
          type: 'static',
          tag: 'hr',
        },
        h2_21: {
          type: 'static',
          tag: 'h2',
          content: 'Question 7',
        },
        checkboxgroup_15: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_25: {
          type: 'static',
          tag: 'hr',
        },
        h2_20: {
          type: 'static',
          tag: 'h2',
          content: 'Question 8',
        },
        checkboxgroup_16: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_24: {
          type: 'static',
          tag: 'hr',
        },
        h2_19: {
          type: 'static',
          tag: 'h2',
          content: 'Question 9',
        },
        checkboxgroup_17: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_23: {
          type: 'static',
          tag: 'hr',
        },
        h2_18: {
          type: 'static',
          tag: 'h2',
          content: 'Question 10',
        },
        checkboxgroup_18: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_22: {
          type: 'static',
          tag: 'hr',
        },
        h2_2: {
          type: 'static',
          tag: 'h2',
          content: 'Question 1',
        },
        checkboxgroup_20: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_4: {
          type: 'static',
          tag: 'hr',
        },
        h2_3: {
          type: 'static',
          tag: 'h2',
          content: 'Question 2',
        },
        checkboxgroup_21: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_5: {
          type: 'static',
          tag: 'hr',
        },
        h2_17: {
          type: 'static',
          tag: 'h2',
          content: 'Question 3',
        },
        checkboxgroup_22: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_35: {
          type: 'static',
          tag: 'hr',
        },
        h2_31: {
          type: 'static',
          tag: 'h2',
          content: 'Question 4',
        },
        checkboxgroup_23: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_34: {
          type: 'static',
          tag: 'hr',
        },
        h2_32: {
          type: 'static',
          tag: 'h2',
          content: 'Question 5',
        },
        checkboxgroup_24: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_33: {
          type: 'static',
          tag: 'hr',
        },
        h2_29: {
          type: 'static',
          tag: 'h2',
          content: 'Question 6',
        },
        checkboxgroup_29: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_32: {
          type: 'static',
          tag: 'hr',
        },
        h2_30: {
          type: 'static',
          tag: 'h2',
          content: 'Question 7',
        },
        checkboxgroup_28: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_31: {
          type: 'static',
          tag: 'hr',
        },
        h2_28: {
          type: 'static',
          tag: 'h2',
          content: 'Question 8',
        },
        checkboxgroup_27: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_3: {
          type: 'static',
          tag: 'hr',
        },
        h2_27: {
          type: 'static',
          tag: 'h2',
          content: 'Question 9',
        },
        checkboxgroup_26: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider: {
          type: 'static',
          tag: 'hr',
        },
        h2_26: {
          type: 'static',
          tag: 'h2',
          content: 'Question 10',
        },
        checkboxgroup_25: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_6: {
          type: 'static',
          tag: 'hr',
          bottom: '1',
        },
        h2_4: {
          type: 'static',
          tag: 'h2',
          content: 'Question 1',
          top: '1',
        },
        checkboxgroup_30: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_7: {
          type: 'static',
          tag: 'hr',
        },
        h2_33: {
          type: 'static',
          tag: 'h2',
          content: 'Question 2',
        },
        checkboxgroup_31: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_43: {
          type: 'static',
          tag: 'hr',
        },
        h2_34: {
          type: 'static',
          tag: 'h2',
          content: 'Question 3',
        },
        checkboxgroup_32: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_37: {
          type: 'static',
          tag: 'hr',
        },
        h2_35: {
          type: 'static',
          tag: 'h2',
          content: 'Question 4',
        },
        checkboxgroup_39: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_36: {
          type: 'static',
          tag: 'hr',
        },
        h2_36: {
          type: 'static',
          tag: 'h2',
          content: 'Question 5',
        },
        checkboxgroup_38: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_42: {
          type: 'static',
          tag: 'hr',
        },
        h2_41: {
          type: 'static',
          tag: 'h2',
          content: 'Question 6',
        },
        checkboxgroup_37: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_41: {
          type: 'static',
          tag: 'hr',
        },
        h2_40: {
          type: 'static',
          tag: 'h2',
          content: 'Question 7',
        },
        checkboxgroup_36: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_40: {
          type: 'static',
          tag: 'hr',
        },
        h2_39: {
          type: 'static',
          tag: 'h2',
          content: 'Question 8',
        },
        checkboxgroup_35: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_39: {
          type: 'static',
          tag: 'hr',
        },
        h2_38: {
          type: 'static',
          tag: 'h2',
          content: 'Question 9',
        },
        checkboxgroup_33: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_38: {
          type: 'static',
          tag: 'hr',
        },
        h2_37: {
          type: 'static',
          tag: 'h2',
          content: 'Question 10',
        },
        checkboxgroup_34: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_8: {
          type: 'static',
          tag: 'hr',
        },
        h2_5: {
          type: 'static',
          tag: 'h2',
          content: 'Question 1',
        },
        checkboxgroup_40: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_9: {
          type: 'static',
          tag: 'hr',
        },
        h2_42: {
          type: 'static',
          tag: 'h2',
          content: 'Question 2',
        },
        checkboxgroup_41: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_10: {
          type: 'static',
          tag: 'hr',
        },
        h2_43: {
          type: 'static',
          tag: 'h2',
          content: 'Question 3',
        },
        checkboxgroup_42: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_51: {
          type: 'static',
          tag: 'hr',
        },
        h2_45: {
          type: 'static',
          tag: 'h2',
          content: 'Question 4',
        },
        checkboxgroup_43: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_50: {
          type: 'static',
          tag: 'hr',
        },
        h2_44: {
          type: 'static',
          tag: 'h2',
          content: 'Question 5',
        },
        checkboxgroup_49: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_49: {
          type: 'static',
          tag: 'hr',
        },
        h2_46: {
          type: 'static',
          tag: 'h2',
          content: 'Question 6',
        },
        checkboxgroup_48: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_48: {
          type: 'static',
          tag: 'hr',
        },
        h2_50: {
          type: 'static',
          tag: 'h2',
          content: 'Question 7',
        },
        checkboxgroup_47: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_47: {
          type: 'static',
          tag: 'hr',
        },
        h2_49: {
          type: 'static',
          tag: 'h2',
          content: 'Question 8',
        },
        checkboxgroup_46: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_46: {
          type: 'static',
          tag: 'hr',
        },
        h2_48: {
          type: 'static',
          tag: 'h2',
          content: 'Question 9',
        },
        checkboxgroup_45: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_45: {
          type: 'static',
          tag: 'hr',
        },
        h2_47: {
          type: 'static',
          tag: 'h2',
          content: 'Question 10',
        },
        checkboxgroup_44: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_44: {
          type: 'static',
          tag: 'hr',
        },
        h2_6: {
          type: 'static',
          tag: 'h2',
          content: 'Question 1',
        },
        checkboxgroup_50: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_11: {
          type: 'static',
          tag: 'hr',
        },
        h2_51: {
          type: 'static',
          tag: 'h2',
          content: 'Question 2',
        },
        checkboxgroup_51: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_12: {
          type: 'static',
          tag: 'hr',
        },
        h2_52: {
          type: 'static',
          tag: 'h2',
          content: 'Question 3',
        },
        checkboxgroup_52: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_59: {
          type: 'static',
          tag: 'hr',
        },
        h2_59: {
          type: 'static',
          tag: 'h2',
          content: 'Question 4',
        },
        checkboxgroup_53: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_58: {
          type: 'static',
          tag: 'hr',
        },
        h2_58: {
          type: 'static',
          tag: 'h2',
          content: 'Question 5',
        },
        checkboxgroup_54: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_57: {
          type: 'static',
          tag: 'hr',
        },
        h2_57: {
          type: 'static',
          tag: 'h2',
          content: 'Question 6',
        },
        checkboxgroup_59: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_56: {
          type: 'static',
          tag: 'hr',
        },
        h2_56: {
          type: 'static',
          tag: 'h2',
          content: 'Question 7',
        },
        checkboxgroup_58: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_55: {
          type: 'static',
          tag: 'hr',
        },
        h2_55: {
          type: 'static',
          tag: 'h2',
          content: 'Question 8',
        },
        checkboxgroup_57: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_54: {
          type: 'static',
          tag: 'hr',
        },
        h2_54: {
          type: 'static',
          tag: 'h2',
          content: 'Question 9',
        },
        checkboxgroup_56: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_53: {
          type: 'static',
          tag: 'hr',
        },
        h2_53: {
          type: 'static',
          tag: 'h2',
          content: 'Question 10',
        },
        checkboxgroup_55: {
          type: 'checkboxgroup',
          items: [
            {
              value: 0,
              label: 'Label',
            },
          ],
          label: 'Checkbox group',
        },
        divider_52: {
          type: 'static',
          tag: 'hr',
        },
      },
    })

    return {
      ...form,
      vueform,
    }
  }
}
</script>

<style>
.vf-create-listing *,
.vf-create-listing *:before,
.vf-create-listing *:after,
.vf-create-listing:root {
  --vf-primary: #00ba95;
  --vf-primary-darker: #06ac8b;
  --vf-color-on-primary: #ffffff;
  --vf-danger: #ef4444;
  --vf-danger-lighter: #fee2e2;
  --vf-success: #10b981;
  --vf-success-lighter: #d1fae5;
  --vf-gray-50: #f9fafb;
  --vf-gray-100: #f3f4f6;
  --vf-gray-200: #e5e7eb;
  --vf-gray-300: #d1d5db;
  --vf-gray-400: #9ca3af;
  --vf-gray-500: #6b7280;
  --vf-gray-600: #4b5563;
  --vf-gray-700: #374151;
  --vf-gray-800: #1f2937;
  --vf-gray-900: #111827;
  --vf-dark-50: #EFEFEF;
  --vf-dark-100: #DCDCDC;
  --vf-dark-200: #BDBDBD;
  --vf-dark-300: #A0A0A0;
  --vf-dark-400: #848484;
  --vf-dark-500: #737373;
  --vf-dark-600: #393939;
  --vf-dark-700: #323232;
  --vf-dark-800: #262626;
  --vf-dark-900: #191919;
  --vf-ring-width: 2px;
  --vf-ring-color: #07bf9b66;
  --vf-link-color: var(--vf-primary);
  --vf-link-decoration: inherit;
  --vf-font-size: 1rem;
  --vf-font-size-sm: 0.875rem;
  --vf-font-size-lg: 1rem;
  --vf-font-size-small: 0.875rem;
  --vf-font-size-small-sm: 0.8125rem;
  --vf-font-size-small-lg: 0.875rem;
  --vf-font-size-h1: 2.125rem;
  --vf-font-size-h1-sm: 2.125rem;
  --vf-font-size-h1-lg: 2.125rem;
  --vf-font-size-h2: 1.875rem;
  --vf-font-size-h2-sm: 1.875rem;
  --vf-font-size-h2-lg: 1.875rem;
  --vf-font-size-h3: 1.5rem;
  --vf-font-size-h3-sm: 1.5rem;
  --vf-font-size-h3-lg: 1.5rem;
  --vf-font-size-h4: 1.25rem;
  --vf-font-size-h4-sm: 1.25rem;
  --vf-font-size-h4-lg: 1.25rem;
  --vf-font-size-h1-mobile: 1.5rem;
  --vf-font-size-h1-mobile-sm: 1.5rem;
  --vf-font-size-h1-mobile-lg: 1.5rem;
  --vf-font-size-h2-mobile: 1.25rem;
  --vf-font-size-h2-mobile-sm: 1.25rem;
  --vf-font-size-h2-mobile-lg: 1.25rem;
  --vf-font-size-h3-mobile: 1.125rem;
  --vf-font-size-h3-mobile-sm: 1.125rem;
  --vf-font-size-h3-mobile-lg: 1.125rem;
  --vf-font-size-h4-mobile: 1rem;
  --vf-font-size-h4-mobile-sm: 1rem;
  --vf-font-size-h4-mobile-lg: 1rem;
  --vf-font-size-blockquote: 1rem;
  --vf-font-size-blockquote-sm: 0.875rem;
  --vf-font-size-blockquote-lg: 1rem;
  --vf-line-height: 1.5rem;
  --vf-line-height-sm: 1.25rem;
  --vf-line-height-lg: 1.5rem;
  --vf-line-height-small: 1.25rem;
  --vf-line-height-small-sm: 1.125rem;
  --vf-line-height-small-lg: 1.25rem;
  --vf-line-height-headings: 1.2;
  --vf-line-height-headings-sm: 1.2;
  --vf-line-height-headings-lg: 1.2;
  --vf-line-height-blockquote: 1.5rem;
  --vf-line-height-blockquote-sm: 1.25rem;
  --vf-line-height-blockquote-lg: 1.5rem;
  --vf-letter-spacing: 0px;
  --vf-letter-spacing-sm: 0px;
  --vf-letter-spacing-lg: 0px;
  --vf-letter-spacing-small: 0px;
  --vf-letter-spacing-small-sm: 0px;
  --vf-letter-spacing-small-lg: 0px;
  --vf-letter-spacing-headings: 0px;
  --vf-letter-spacing-headings-sm: 0px;
  --vf-letter-spacing-headings-lg: 0px;
  --vf-letter-spacing-blockquote: 0px;
  --vf-letter-spacing-blockquote-sm: 0px;
  --vf-letter-spacing-blockquote-lg: 0px;
  --vf-gutter: 1rem;
  --vf-gutter-sm: 0.5rem;
  --vf-gutter-lg: 1rem;
  --vf-min-height-input: 2.375rem;
  --vf-min-height-input-sm: 2.125rem;
  --vf-min-height-input-lg: 2.875rem;
  --vf-py-input: 0.375rem;
  --vf-py-input-sm: 0.375rem;
  --vf-py-input-lg: 0.625rem;
  --vf-px-input: 0.75rem;
  --vf-px-input-sm: 0.5rem;
  --vf-px-input-lg: 0.875rem;
  --vf-py-btn: 0.375rem;
  --vf-py-btn-sm: 0.375rem;
  --vf-py-btn-lg: 0.625rem;
  --vf-px-btn: 0.875rem;
  --vf-px-btn-sm: 0.75rem;
  --vf-px-btn-lg: 1.25rem;
  --vf-py-btn-small: 0.25rem;
  --vf-py-btn-small-sm: 0.25rem;
  --vf-py-btn-small-lg: 0.375rem;
  --vf-px-btn-small: 0.625rem;
  --vf-px-btn-small-sm: 0.625rem;
  --vf-px-btn-small-lg: 0.75rem;
  --vf-py-group-tabs: 0.375rem;
  --vf-py-group-tabs-sm: 0.375rem;
  --vf-py-group-tabs-lg: 0.625rem;
  --vf-px-group-tabs: 0.75rem;
  --vf-px-group-tabs-sm: 0.5rem;
  --vf-px-group-tabs-lg: 0.875rem;
  --vf-py-group-blocks: 0.75rem;
  --vf-py-group-blocks-sm: 0.625rem;
  --vf-py-group-blocks-lg: 0.875rem;
  --vf-px-group-blocks: 1rem;
  --vf-px-group-blocks-sm: 1rem;
  --vf-px-group-blocks-lg: 1rem;
  --vf-py-tag: 0px;
  --vf-py-tag-sm: 0px;
  --vf-py-tag-lg: 0px;
  --vf-px-tag: 0.4375rem;
  --vf-px-tag-sm: 0.4375rem;
  --vf-px-tag-lg: 0.4375rem;
  --vf-py-slider-tooltip: 0.125rem;
  --vf-py-slider-tooltip-sm: 0.0625rem;
  --vf-py-slider-tooltip-lg: 0.1875rem;
  --vf-px-slider-tooltip: 0.375rem;
  --vf-px-slider-tooltip-sm: 0.3125rem;
  --vf-px-slider-tooltip-lg: 0.5rem;
  --vf-py-blockquote: 0.25rem;
  --vf-py-blockquote-sm: 0.25rem;
  --vf-py-blockquote-lg: 0.25rem;
  --vf-px-blockquote: 0.75rem;
  --vf-px-blockquote-sm: 0.75rem;
  --vf-px-blockquote-lg: 0.75rem;
  --vf-py-hr: 0.25rem;
  --vf-space-addon: 0px;
  --vf-space-addon-sm: 0px;
  --vf-space-addon-lg: 0px;
  --vf-space-checkbox: 0.375rem;
  --vf-space-checkbox-sm: 0.375rem;
  --vf-space-checkbox-lg: 0.375rem;
  --vf-space-tags: 0.1875rem;
  --vf-space-tags-sm: 0.1875rem;
  --vf-space-tags-lg: 0.1875rem;
  --vf-space-static-tag-1: 1rem;
  --vf-space-static-tag-2: 2rem;
  --vf-space-static-tag-3: 3rem;
  --vf-floating-top: 0rem;
  --vf-floating-top-sm: 0rem;
  --vf-floating-top-lg: 0.6875rem;
  --vf-bg-input: #ffffff;
  --vf-bg-input-hover: #ffffff;
  --vf-bg-input-focus: #ffffff;
  --vf-bg-input-danger: #ffffff;
  --vf-bg-input-success: #ffffff;
  --vf-bg-checkbox: #ffffff;
  --vf-bg-checkbox-hover: #ffffff;
  --vf-bg-checkbox-focus: #ffffff;
  --vf-bg-checkbox-danger: #ffffff;
  --vf-bg-checkbox-success: #ffffff;
  --vf-bg-disabled: var(--vf-gray-200);
  --vf-bg-selected: #1118270d;
  --vf-bg-passive: var(--vf-gray-300);
  --vf-bg-icon: var(--vf-gray-500);
  --vf-bg-danger: var(--vf-danger-lighter);
  --vf-bg-success: var(--vf-success-lighter);
  --vf-bg-tag: var(--vf-primary);
  --vf-bg-slider-handle: var(--vf-primary);
  --vf-bg-toggle-handle: #ffffff;
  --vf-bg-date-head: var(--vf-gray-100);
  --vf-bg-addon: #ffffff00;
  --vf-bg-btn: var(--vf-primary);
  --vf-bg-btn-danger: var(--vf-danger);
  --vf-bg-btn-secondary: var(--vf-gray-200);
  --vf-bg-table-header: var(--vf-gray-100);
  --vf-color-input: var(--vf-gray-800);
  --vf-color-input-hover: var(--vf-gray-800);
  --vf-color-input-focus: var(--vf-gray-800);
  --vf-color-input-danger: var(--vf-gray-800);
  --vf-color-input-success: var(--vf-gray-800);
  --vf-color-disabled: var(--vf-gray-400);
  --vf-color-placeholder: var(--vf-gray-300);
  --vf-color-passive: var(--vf-gray-700);
  --vf-color-muted: var(--vf-gray-500);
  --vf-color-floating: var(--vf-gray-500);
  --vf-color-floating-focus: var(--vf-gray-500);
  --vf-color-floating-success: var(--vf-gray-500);
  --vf-color-floating-danger: var(--vf-gray-500);
  --vf-color-danger: var(--vf-danger);
  --vf-color-success: var(--vf-success);
  --vf-color-tag: var(--vf-color-on-primary);
  --vf-color-addon: var(--vf-gray-800);
  --vf-color-date-head: var(--vf-gray-700);
  --vf-color-btn: var(--vf-color-on-primary);
  --vf-color-btn-danger: #ffffff;
  --vf-color-btn-secondary: var(--vf-gray-700);
  --vf-color-table-header: var(--vf-gray-800);
  --vf-border-color-input: var(--vf-gray-300);
  --vf-border-color-input-hover: var(--vf-gray-300);
  --vf-border-color-input-focus: var(--vf-primary);
  --vf-border-color-input-danger: var(--vf-gray-300);
  --vf-border-color-input-success: var(--vf-gray-300);
  --vf-border-color-checkbox: var(--vf-gray-300);
  --vf-border-color-checkbox-focus: var(--vf-primary);
  --vf-border-color-checkbox-hover: var(--vf-gray-300);
  --vf-border-color-checkbox-danger: var(--vf-gray-300);
  --vf-border-color-checkbox-success: var(--vf-gray-300);
  --vf-border-color-checked: var(--vf-primary);
  --vf-border-color-passive: var(--vf-gray-300);
  --vf-border-color-slider-tooltip: var(--vf-primary);
  --vf-border-color-tag: var(--vf-primary);
  --vf-border-color-btn: var(--vf-primary);
  --vf-border-color-btn-danger: var(--vf-danger);
  --vf-border-color-btn-secondary: var(--vf-gray-200);
  --vf-border-color-blockquote: var(--vf-gray-300);
  --vf-border-color-hr: var(--vf-gray-300);
  --vf-border-color-signature-hr: var(--vf-gray-300);
  --vf-border-color-table: var(--vf-gray-300);
  --vf-border-width-input-t: 1px;
  --vf-border-width-input-r: 1px;
  --vf-border-width-input-b: 1px;
  --vf-border-width-input-l: 1px;
  --vf-border-width-radio-t: 1px;
  --vf-border-width-radio-r: 1px;
  --vf-border-width-radio-b: 1px;
  --vf-border-width-radio-l: 1px;
  --vf-border-width-checkbox-t: 1px;
  --vf-border-width-checkbox-r: 1px;
  --vf-border-width-checkbox-b: 1px;
  --vf-border-width-checkbox-l: 1px;
  --vf-border-width-dropdown: 1px;
  --vf-border-width-btn: 1px;
  --vf-border-width-toggle: 0.125rem;
  --vf-border-width-tag: 1px;
  --vf-border-width-blockquote: 3px;
  --vf-border-width-table: 1px;
  --vf-shadow-input: 0px 0px 0px 0px rgba(0,0,0,0);
  --vf-shadow-input-hover: 0px 0px 0px 0px rgba(0,0,0,0);
  --vf-shadow-input-focus: 0px 0px 0px 0px rgba(0,0,0,0);
  --vf-shadow-handles: 0px 0px 0px 0px rgba(0,0,0,0);
  --vf-shadow-handles-hover: 0px 0px 0px 0px rgba(0,0,0,0);
  --vf-shadow-handles-focus: 0px 0px 0px 0px rgba(0,0,0,0);
  --vf-shadow-btn: 0px 0px 0px 0px rgba(0,0,0,0);
  --vf-shadow-dropdown: 0px 0px 0px 0px rgba(0,0,0,0);
  --vf-radius-input: 0.25rem;
  --vf-radius-input-sm: 0.25rem;
  --vf-radius-input-lg: 0.25rem;
  --vf-radius-btn: 0.25rem;
  --vf-radius-btn-sm: 0.25rem;
  --vf-radius-btn-lg: 0.25rem;
  --vf-radius-small: 0.25rem;
  --vf-radius-small-sm: 0.25rem;
  --vf-radius-small-lg: 0.25rem;
  --vf-radius-large: 0.25rem;
  --vf-radius-large-sm: 0.25rem;
  --vf-radius-large-lg: 0.25rem;
  --vf-radius-tag: 0.25rem;
  --vf-radius-tag-sm: 0.25rem;
  --vf-radius-tag-lg: 0.25rem;
  --vf-radius-checkbox: 0.25rem;
  --vf-radius-checkbox-sm: 0.25rem;
  --vf-radius-checkbox-lg: 0.25rem;
  --vf-radius-slider: 0.25rem;
  --vf-radius-slider-sm: 0.25rem;
  --vf-radius-slider-lg: 0.25rem;
  --vf-radius-image: 0.25rem;
  --vf-radius-image-sm: 0.25rem;
  --vf-radius-image-lg: 0.25rem;
  --vf-radius-gallery: 0.25rem;
  --vf-radius-gallery-sm: 0.25rem;
  --vf-radius-gallery-lg: 0.25rem;
  --vf-checkbox-size: 1rem;
  --vf-checkbox-size-sm: 0.875rem;
  --vf-checkbox-size-lg: 1rem;
  --vf-gallery-size: 6rem;
  --vf-gallery-size-sm: 5rem;
  --vf-gallery-size-lg: 7rem;
  --vf-toggle-width: 3rem;
  --vf-toggle-width-sm: 2.75rem;
  --vf-toggle-width-lg: 3rem;
  --vf-toggle-height: 1.25rem;
  --vf-toggle-height-sm: 1rem;
  --vf-toggle-height-lg: 1.25rem;
  --vf-slider-height: 0.375rem;
  --vf-slider-height-sm: 0.3125rem;
  --vf-slider-height-lg: 0.5rem;
  --vf-slider-height-vertical: 20rem;
  --vf-slider-height-vertical-sm: 20rem;
  --vf-slider-height-vertical-lg: 20rem;
  --vf-slider-handle-size: 1rem;
  --vf-slider-handle-size-sm: 0.875rem;
  --vf-slider-handle-size-lg: 1.25rem;
  --vf-slider-tooltip-distance: 0.5rem;
  --vf-slider-tooltip-distance-sm: 0.375rem;
  --vf-slider-tooltip-distance-lg: 0.5rem;
  --vf-slider-tooltip-arrow-size: 0.3125rem;
  --vf-slider-tooltip-arrow-size-sm: 0.3125rem;
  --vf-slider-tooltip-arrow-size-lg: 0.3125rem;
}
</style>