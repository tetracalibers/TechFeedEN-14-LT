<script setup lang="ts">
type ColumnKey = "layout" | "paint" | "composite" | "total"

interface Measured {
  condition: string
  layout: number
  paint: number
  composite: number
  highlight?: ColumnKey[]
}

interface Props {
  data: Measured[]
}

const props = defineProps<Props>()

const isHighlight = (record: Measured, key: ColumnKey) => {
  return record.highlight?.includes(key)
}
</script>

<template>
  <div class="_root">
    <p class="_title-caption">アニメーション中に発生した再レンダリング時間の合計</p>
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
            <td>
              <span :class="{ highlight: isHighlight(record, 'layout') }">{{ record.layout }}</span>
            </td>
            <td>
              <span :class="{ highlight: isHighlight(record, 'paint') }">{{ record.paint }}</span>
            </td>
            <td>
              <span :class="{ highlight: isHighlight(record, 'composite') }">{{
                record.composite
              }}</span>
            </td>
            <td>
              <span :class="{ highlight: isHighlight(record, 'total') }">
                {{ record.layout + record.paint + record.composite }}
              </span>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <div class="_footer">
      <a
        class="_repo-link"
        href="https://github.com/tetracalibers/parse-chrome-performance-profile"
      >
        解析スクリプトRepository
      </a>
      <p class="_unit-caption">単位はすべてμs</p>
    </div>
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
  color: #778ca3;
  font-weight: 600;
  text-align: left;
}
table td:not(:first-child) {
  font-family: monospace;
  text-align: right;
}
.highlight {
  position: relative;
  padding: 0 0.5em;
  margin: 0 -0.5em;
}
.highlight::before {
  --transparent: rgba(255, 255, 255, 0);
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0%;
  left: 0;
  background: linear-gradient(45deg, var(--transparent) 0%, yellow 0% 40%, var(--transparent) 100%);
  z-index: -1;
  transform: skewX(10deg);
}
._root {
  width: max-content;
}
._footer {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
}
._repo-link {
  font-size: 0.8em;
  border: 0;
  opacity: 0.8;
}
._unit-caption {
  text-align: right !important;
  margin: 0 !important;
}
._title-caption {
  font-size: 1rem !important;
}
</style>
