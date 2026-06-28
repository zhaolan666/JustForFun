# Dropdown Test

<script setup>
import JffButton from '@justforfun-ui/components/button/src/button.vue'
import JffDropdown from '@justforfun-ui/components/dropdown/src/dropdown.vue'
import JffDropdownItem from '@justforfun-ui/components/dropdown/src/dropdown-item.vue'
</script>

Test dropdown in basic directory.

## Test

<div style="padding: 20px; background: white; border-radius: 4px;">
  <h4 style="margin: 0 0 12px 0;">Button:</h4>
  <JffButton type="success">Button in Basic</JffButton>

  <hr style="margin: 20px 0;" />

  <h4 style="margin: 0 0 12px 0;">Dropdown:</h4>
  <JffDropdown trigger="hover">
    <JffDropdownItem>Item 1</JffDropdownItem>
    <JffDropdownItem>Item 2</JffDropdownItem>
  </JffDropdown>
</div>
