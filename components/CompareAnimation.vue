<script setup lang="ts">
interface Measured {
  condition: string
  layout: number
  paint: number
  composite: number
}

interface Props {
  data: Measured[]
}

const props = defineProps<Props>()
</script>

<template>
  <div class="_root">
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Layout</th>
          <th>Paint</th>
          <th>Composite</th>
          <th>TOTAL</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="record in props.data">
          <tr>
            <td>{{ record.condition }}</td>
            <td>{{ record.layout }}</td>
            <td>{{ record.paint }}</td>
            <td>{{ record.composite }}</td>
            <td>{{ record.layout + record.paint + record.composite }}</td>
          </tr>
        </template>
      </tbody>
    </table>
    <p class="_unit-caption">単位はすべてμs</p>
  </div>
</template>

<style scoped>
table {
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0;
}
table th {
  padding: 1rem 2rem;
  border-block: solid 2px #778ca3;
  color: #778ca3;
  font-size: 1.5rem;
  font-weight: 600;
}
table td {
  padding: 1rem 2rem;
  font-size: 1.25rem;
  border-bottom: solid 1px #778ca3;
}
table td:first-child {
  text-align: left;
  color: #778ca3;
  font-weight: 600;
}
._root {
  width: max-content;
}
._unit-caption {
  text-align: right !important;
}
</style>
