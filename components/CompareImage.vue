<script setup lang="ts">
interface Image {
  src: string
  title: string
}

interface Props {
  left: Image
  right: Image
}

const props = defineProps<Props>()

const srcUrl = (src: string) => {
  const baseUrl = "/TechFeedEN-14-LT"
  if (src.startsWith("/")) {
    return baseUrl + src
  } else {
    return baseUrl + "/" + src
  }
}
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>{{ props.left.title }}</th>
        <th>{{ props.right.title }}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <img :src="srcUrl(props.left.src)" />
        </td>
        <td>
          <img :src="srcUrl(props.right.src)" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
th {
  text-align: center !important;
  font-size: 1.5em;
}
tr {
  border: 0;
}
img {
  width: 100%;
  object-fit: contain;
}
</style>
